document.addEventListener('DOMContentLoaded', () => {
  const chatWindow = document.getElementById('chat-window');
  const chatForm = document.getElementById('chat-form');
  const userInput = document.getElementById('user-input');

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (message === '') return;

    appendMessage('user', message);
    userInput.value = '';

    // Simulate bot response
    setTimeout(() => {
      const botReply = generateBotReply(message);
      appendMessage('bot', botReply);
    }, 1000);
  });

  function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', `${sender}-message`);
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function generateBotReply(userMessage) {
    // Simple placeholder response
    return `You said: "${userMessage}"`;
  }
});
