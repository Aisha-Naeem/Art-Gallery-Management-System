document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the email input value
    var email = document.getElementById('emailInput').value;
    
    // Display the submitted data
    document.getElementById('submittedEmail').textContent = email;
    document.getElementById('submittedData').style.display = 'block';
});


const nextButton = document.getElementsByTagName("button");
// Add a click event listener to the button
nextButton.addEventListener("click", function() {
    // Navigate to the next page by setting the new URL
    window.location.href = "emailVerification.html"; // Change "next_page.html" to the URL of your next page
});
