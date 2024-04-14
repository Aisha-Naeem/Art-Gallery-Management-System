document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the email input value
    var email = document.getElementById('emailInput').value;
    
    // Display the submitted data
    document.getElementById('submittedEmail').textContent = email;
    document.getElementById('submittedData').style.display = 'block';
});
