// app.js

// Pre-made accounts
const accounts = [
    { username: "User1", password: "password1", isAdmin: true },
    { username: "User2", password: "password2", isAdmin: true },
    { username: "User3", password: "password3", isAdmin: true },
    { username: "User4", password: "password4", isAdmin: true },
    { username: "Ibu", password: "Hello", isAdmin: true }
  ];
  
  let loggedInUser = null;
  
  // Login logic
  document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const user = accounts.find(acc => acc.username === username && acc.password === password);
    
    if (user) {
      loggedInUser = user;
      document.getElementById('login-section').style.display = 'none';
      document.getElementById('forum-section').style.display = 'block';
      if (user.isAdmin) {
        document.getElementById('create-forum-btn').style.display = 'block';
      }
    } else {
      document.getElementById('login-error').textContent = 'Invalid username or password';
    }
  });
// Array to store forums
let forums = [];

// Function to create a forum (admin only)
document.getElementById('create-forum-btn').addEventListener('click', function() {
  if (loggedInUser.isAdmin) {
    const forumName = prompt("Enter forum name:");
    if (forumName) {
      forums.push({ name: forumName, muted: false });
      renderForums();
    }
  }
});

// Function to render forums
function renderForums() {
  const forumsList = document.getElementById('forums-list');
  forumsList.innerHTML = ''; // Clear previous

  forums.forEach((forum, index) => {
    const forumDiv = document.createElement('div');
    forumDiv.textContent = forum.name + (forum.muted ? " (Muted)" : "");
    
    if (loggedInUser.isAdmin) {
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener('click', function() {
        forums.splice(index, 1); // Remove forum
        renderForums();
      });

      const muteBtn = document.createElement('button');
      muteBtn.textContent = forum.muted ? "Unmute" : "Mute";
      muteBtn.addEventListener('click', function() {
        forum.muted = !forum.muted; // Toggle mute
        renderForums();
      });

      forumDiv.appendChild(deleteBtn);
      forumDiv.appendChild(muteBtn);
    }
    
    forumsList.appendChild(forumDiv);
  });
}
  
