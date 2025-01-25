let selectedCharacter = sessionStorage.getItem('selectedCharacter') || 'male'; // Default to male if no character selected

// Load character info based on the selected character
function loadCharacterInfo() {
    const characterInfo = document.getElementById('character-info');
    const characterName = selectedCharacter === 'male' ? 'John' : 'Jane';
    characterInfo.innerHTML = `<h2 class="text-2xl font-semibold">${characterName}</h2><p class="text-gray-600">Your companion is here to talk and relieve stress.</p>`;
}

// Append user message
function appendUserMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-bubble', 'user');
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Append companion's message
function appendCompanionMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const companionMessage = document.createElement('div');
    companionMessage.classList.add('chat-bubble', 'companion');
    companionMessage.textContent = message;
    chatBox.appendChild(companionMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Simulate companion response
function simulateCompanionResponse(userMessage) {
    const responses = [
        "I'm here to listen. Tell me more.",
        "That sounds tough. I'm here for you.",
        "Take a deep breath. Things will get better.",
        "It's okay, you're doing great!",
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    appendCompanionMessage(response);
}

// Send message on button click
document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('chat-input').value;
    if (userInput.trim()) {
        appendUserMessage(userInput);
        simulateCompanionResponse(userInput);
        document.getElementById('chat-input').value = ''; // Clear input
    }
});

// Load character info and previous messages when the page loads
window.onload = function () {
    loadCharacterInfo();
};

