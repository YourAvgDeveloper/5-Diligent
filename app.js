const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user1', password: 'user123', role: 'user' },
    { username: 'user2', password: 'user123', role: 'user' },
    { username: 'user3', password: 'user123', role: 'user' },
    { username: 'user4', password: 'user123', role: 'user' }
];

let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    const user = users.find(u => u.username === username);
    if (user) {
        currentUser = user;
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat').style.display = 'block';
    } else {
        alert('Invalid username');
    }
}

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message.trim() !== '') {
        const output = document.getElementById('output');
        const messageElement = document.createElement('div');
        messageElement.textContent = `${currentUser.username}: ${message}`;
        output.appendChild(messageElement);
        document.getElementById('message').value = '';
        output.scrollTop = output.scrollHeight;
    }
}

function muteUser(username) {
    if (currentUser.role === 'admin') {
        // Implement mute functionality
        alert(`${username} has been muted.`);
    }
}

function deleteMessage(messageElement) {
    if (currentUser.role === 'admin') {
        messageElement.remove();
    }
}

