/**
 * SECTION: Page Navigation
 * Handles showing/hiding different sections of the site
 */
function showPage(pageId, element) {
    // 1. Alert for demo purposes (since Adopt and Shop pages aren't in your HTML yet)
    if (pageId !== 'home') {
        alert("Redirecting to the " + pageId.toUpperCase() + " page!");
    }

    // 2. Update Active Link UI
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));

    if (element) {
        element.classList.add('active');
    }
}


// Add listener for the Learn More button
document.getElementById('learnBtn').addEventListener('click', () => {
    alert("More information about cat care is coming soon!");
});

// Create map
const map = L.map('map').setView([3.8168, 103.3317], 15);

// Load OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add store marker
L.marker([3.8168, 103.3317])
    .addTo(map)
    .bindPopup("🐱 PetBuddy Store - Kuantan")
    .openPopup();