function switchToRegisterForm() {
    var form = document.getElementById('loginForm');
    form.classList.add('form-transition');
    setTimeout(function () {
        form.innerHTML = '<input type="text" id="registerUsername" placeholder="Username" required>' +
            '<input type="email" id="registerEmail" placeholder="Email" required>' +
            '<input type="password" id="registerPassword" placeholder="Password" required>' +
            '<button type="submit" id="registerSubmitBtn">Register</button>' +
            '<div id="feedback"></div>'; // Add a feedback container
        form.classList.remove('form-transition');
        document.getElementById('loginBtn').classList.add('hidden');
        document.getElementById('registerBtn').classList.add('hidden');
    }, 300);
}

function switchToLoginForm() {
    var form = document.getElementById('loginForm');
    form.classList.add('form-transition');
    setTimeout(function () {
        form.innerHTML = '<input type="email" id="loginEmail" placeholder="Email" required>' +
            '<input type="password" id="loginPassword" placeholder="Password" required>' +
            '<div class="buttons">' +
            '<button type="submit" id="loginBtn">Login</button>' +
            '<button type="button" id="registerBtn">Register</button>' +
            '</div>' +
            '<div id="feedback"></div>'; // Add a feedback container
        form.classList.remove('form-transition');
        document.getElementById('loginBtn').classList.add('hidden');
        document.getElementById('registerBtn').classList.add('hidden');
    }, 300);
}

document.getElementById('registerBtn').addEventListener('click', switchToRegisterForm);

document.getElementById('loginBtn').addEventListener('click', function () {
    // This is where you can handle form submission
    // For demonstration, let's just log the credentials
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    console.log("Login Form Submitted with Email:", email, "and Password:", password);
    // Display feedback to the user
    showFeedback("Logging in... Please wait.");
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // This is where you can handle form submission
    // For demonstration, let's just log the form data
    var formData = new FormData(event.target);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });
    console.log("Form Submitted with Data:", data);
    // Here you can send the form data via AJAX or to a server-side script
    // for further processing
    // After submission, you can provide feedback to the user
    showFeedback("Submitting form... Please wait.");
    // Redirect to verification page after successful registration
    window.location.href = "index2.html"; // Corrected the URL here
}

function showFeedback(message) {
    var feedbackContainer = document.getElementById('feedback');
    feedbackContainer.innerHTML = message;
    // Clear the feedback message after a certain duration (e.g., 3 seconds)
    setTimeout(function () {
        feedbackContainer.innerHTML = "";
    }, 3000);
}

document.getElementById('loginForm').addEventListener('submit', handleSubmit);

function goToPage2() {
    window.location.href = 'index2.html';
}
