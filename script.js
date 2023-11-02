document.addEventListener('DOMContentLoaded', function() {
    // Get the cookie alert modal
    var cookieAlert = document.querySelector('.cookie.alert');
  
    // Function to hide the cookie alert
    function hideCookieAlert() {
      cookieAlert.classList.remove('show'); // or your equivalent class/method to hide
    }
  
    // Check if the consent has already been given
    var cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === 'accepted') {
      hideCookieAlert(); // Hide the modal if consent is already given
    }
  
    // Get the accept and reject buttons
    var acceptButton = cookieAlert.querySelector('.btn.accept');
    var rejectButton = cookieAlert.querySelector('.btn.reject');
  
    // Event listener for the accept button
    acceptButton.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'accepted'); // Save the consent
      hideCookieAlert(); // Then hide the alert
    });
  
    // Event listener for the reject button
    rejectButton.addEventListener('click', function() {
      // If you want to save the rejection in localStorage, uncomment the following line:
      // localStorage.setItem('cookieConsent', 'rejected');
      hideCookieAlert(); // Then hide the alert
    });
  
    // Your existing code for other functionalities
    // ...
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Get the share button by its id
    const shareButton = document.getElementById("shareButton");
  
    // Add a click event listener to the share button
    shareButton.addEventListener("click", function() {
      // Get the current page's URL
      const currentPageUrl = window.location.href;
      
      // Set the value of the input field with id 'pageUrl'
      const inputField = document.getElementById('pageUrl');
      inputField.value = currentPageUrl;
    });
  });
  
  