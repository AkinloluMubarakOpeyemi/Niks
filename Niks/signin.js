// Validate form inputs
document.getElementById('signInForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please fill out all fields!');
        return;
    }

    // Simulate login credentials (replace with real validation logic if needed)
    const validEmail = "user@example.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
        alert(`Welcome, ${email}! Redirecting to the homepage...`);
        
        // Redirect to the home page
        window.location.href = "home.html"; // Replace 'home.html' with your homepage URL
    } else {
        alert('Invalid email or password! Please try again.');
    }
});
