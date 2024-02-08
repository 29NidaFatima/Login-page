const loginForm = document.getElementById('login-form');
const errorMessage = document.querySelector('.error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with your actual login logic (e.g., sending a POST request to a server)
    if (username !== 'admin' || password !== 'password') {
        errorMessage.textContent = 'Invalid username or password';
        return;
    }

    // Redirect to the homepage or dashboard after successful login
    window.location.href = 'homepage.html';
});

