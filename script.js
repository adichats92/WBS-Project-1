// Wait for the document to fully load before running the JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    // Get the share button by its id
    const shareButton = document.getElementById("shareButton");

    // Add a click event listener to the share button
    shareButton.addEventListener("click", function() {
        // Get the current page's URL
        const currentPageUrl = window.location.href;

        // Display an alert with the page's URL
        alert("Share this recipe: " + currentPageUrl);
    });
});