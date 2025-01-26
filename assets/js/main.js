const API_KEY = "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";
const API_URL = "https://api.openai.com/v1/completions";

const chatInput = document.getElementById("chat-input");
const chatBox = document.getElementById("chat-box");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);

async function sendMessage() {
    const userMessage = chatInput.value.trim();

    if (!userMessage) return;

    displayMessage(userMessage, "user");

    chatInput.value = "";

    const response = await getAIResponse(userMessage);

    if (response) {
        displayMessage(response, "companion");
    } else {
        displayMessage("Sorry, I couldn't process your request. Please try again.", "companion");
    }
}

function displayMessage(message, sender) {
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble", sender);
    bubble.textContent = message;
    chatBox.appendChild(bubble);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getAIResponse(message) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: `You are a friendly, supportive companion. Respond to: ${message}`,
                max_tokens: 150,
                temperature: 0.7
            })
        });

        const data = await response.json();
        return data.choices[0].text.trim();
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return null;
    }
}
