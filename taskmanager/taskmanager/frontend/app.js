const baseUrl = 'http://127.0.0.1:8000/api/';

function register() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(baseUrl + 'register/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, email, password})
  })
  .then(res => res.json())
  .then(data => alert('Registration successful! Please login.'))
  .catch(err => console.error(err));
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch(baseUrl + 'token/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  })
  .then(res => res.json())
  .then(data => {
    if (data.access) {
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      document.getElementById('logout-btn').style.display = 'block';
      document.getElementById('task-section').style.display = 'block';
      document.getElementById('register-login').style.display = 'none';
      fetchTasks();
    } else {
      alert('Login failed');
    }
  })
  .catch(err => console.error(err));
}

function logout() {
  localStorage.clear();
  location.reload();
}

function fetchTasks() {
  fetch(baseUrl + 'tasks/', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access')
    }
  })
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("task-list");
    list.innerHTML = '';
    data.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task.title} (${task.completed ? "✅" : "❌"})</span>
        <button class="toggle-btn" onclick="toggleComplete(${task.id}, ${task.completed})">
          ${task.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button class="edit-btn" onclick="editTask(${task.id}, '${task.title}', ${task.completed})">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
      `;
      list.appendChild(li);
    });
  });
}

function createTask() {
  const title = document.getElementById("task-title").value;

  fetch(baseUrl + 'tasks/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access')
    },
    body: JSON.stringify({title, completed: false})
  })
  .then(res => res.json())
  .then(task => {
    document.getElementById("task-title").value = '';
    fetchTasks();
  });
}

function editTask(id, oldTitle, oldCompleted) {
  const newTitle = prompt("Edit task title", oldTitle);
  if (newTitle !== null) {
    fetch(baseUrl + `tasks/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access')
      },
      body: JSON.stringify({title: newTitle, completed: oldCompleted})
    })
    .then(res => res.json())
    .then(data => fetchTasks());
  }
}

function deleteTask(id) {
  fetch(baseUrl + `tasks/${id}/`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access')
    }
  })
  .then(res => {
    if (res.status === 204) {
      fetchTasks();
    }
  });
}function toggleComplete(id, currentStatus) {
  fetch(baseUrl + `tasks/${id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access')
    },
    body: JSON.stringify({ completed: !currentStatus })
  })
  .then(res => res.json())
  .then(() => fetchTasks())
  .catch(err => console.error('Toggle complete failed:', err));
}
