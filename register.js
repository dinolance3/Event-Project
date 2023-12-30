document.addEventListener("DOMContentLoaded", function () {
    // Function to show success message and open a new window
    function showSuccessAndOpenNewWindow() {
        alert("Your form has been submitted!");
        // Open a new window with the specified HTML content
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="login.css">
            <title>Login</title>
        </head>
        
        <body>
            <div class="login-container" id="loginContainer">
                <div class="login-header">Login</div>
                <div class="input-group">
                    <label for="email" class="input-label">Email</label>
                    <input type="text" id="loginEmail" class="input-field">
                </div>
                <div class="input-group">
                    <label for="password" class="input-label">Password</label>
                    <input type="password" id="loginPassword" class="input-field">
                </div>
                <button onclick="validateLogin()" class="submit-button">Log In</button>
                <button onclick="redirectToSignup()" class="signup-button">Sign Up</button>
            </div>
        
            <script src="login.js"></script>
        </body>
        
        </html>`);
    }

    // Event listener for form submission
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission
            showSuccessAndOpenNewWindow();
        });
    }
});
