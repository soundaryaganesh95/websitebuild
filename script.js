document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a click handler to the "Read more" button
    const readMoreButton = document.querySelector('.read-more-btn');
    
    readMoreButton.addEventListener('click', () => {
        alert('Navigating to the property details page!');
        // In a real application, you'd use: window.location.href = '/property-details';
    });

    // Example: Log a message when a navigation link is clicked
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // e.preventDefault(); // Uncomment this to stop the page from navigating
            console.log(`Clicked on: ${link.textContent}`);
        });
    });
});
// Get the link element
const authLink = document.getElementById('authLink');

// Use a variable in localStorage to remember the click count across pages.
// If the user navigates away and comes back, this helps maintain state.
// We'll use 0 as the initial value if it's not set.
let clickCount = parseInt(localStorage.getItem('authLinkClickCount') || '0');

// Add an event listener for when the link is clicked
authLink.addEventListener('click', function(event) {
    // Prevent the default navigation action immediately
    event.preventDefault(); 
    
    // Increment the counter and save it back to localStorage
    clickCount++;
    localStorage.setItem('authLinkClickCount', clickCount);

    // Determine which page to open based on the click count
    if (clickCount === 1) {
        // First Click: Go to Login Page
        window.location.href = 'login.html';
    } else if (clickCount === 2) {
        // Second Click: Go to Signup Page
        window.location.href = 'signup.html';
        
        // After opening the signup page, reset the counter
        // so the next click will restart the cycle (go back to login).
        localStorage.setItem('authLinkClickCount', '0');
    }
});
// 1. Get the image element by its ID
const residentialImage = document.getElementById('residentialImage');

// Check if the image element exists before proceeding
if (residentialImage) {
    // 2. Add a click event listener to the image
    residentialImage.addEventListener('click', function() {
        // 3. Navigate to the desired page
        window.location.href = 'residential.html';
    });
}