function showPage(pageId, element) {

    

    // Redirect to different pages
    if (pageId === 'home') {
        window.location.href = "home.html";
    }

    else if (pageId === 'catalogue') {
        window.location.href = "Catalogue.html";
    }

    else if (pageId === 'shop') {
        window.location.href = "shop.html";
    }

    else if (pageId === 'learnmore') {
        window.location.href = "learnmore.html";
    }

    // Update Active Link UI
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.classList.remove('active');//stay
    });

    if (element) {
        element.classList.add('active');
    }
}

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