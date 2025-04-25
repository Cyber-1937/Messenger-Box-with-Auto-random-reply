document.addEventListener('DOMContentLoaded', function() {
    // Element
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesContainer = document.getElementById('messages');
    
    // Username Random test
    const username = prompt('Enter your username:') || 'Anonymous';
    
    // inputt
    messageInput.focus();
    
    function addMessage(content, isReceived) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isReceived ? 'received' : 'sent');
        messageElement.textContent = content;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    function sendMessage() {
        const content = messageInput.value.trim();
        if (content) {
            // Add message
            addMessage(content, false);
            messageInput.value = '';
            messageInput.focus();
            
            // Auto reply 1sec
            setTimeout(() => {
                addMessage('This is an automated reply to: ' + content, true);
            }, 1000);
        }
    }
    
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Welcome 
    addMessage('Welcome to the chat, ' + username + '!', true);
});