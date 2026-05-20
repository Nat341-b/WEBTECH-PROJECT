function loadNavbar() {
    const currentPage = window.location.pathname.split("/").pop();

    const navbar = `
        <nav>
            <div class="logo">🐱 Pet<span class="logo-text">Buddy</span></div>
            <ul class="nav-links">
                <li><a href="home.html" class="${currentPage === 'home.html' ? 'active' : ''}">🏠 Home</a></li>
                <li><a href="Catalogue.html" class="${currentPage === 'Catalogue.html' ? 'active' : ''}">🐾 Adopt Now</a></li>
                <li><a href="shop.html" class="${currentPage === 'shop.html' ? 'active' : ''}">🛒 Shop</a></li>
                <li><a href="learnmore.html" class="${currentPage === 'learnmore.html' ? 'active' : ''}">📚 Learn More</a></li>
                <li><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">📞 About Us</a></li>
            </ul>
        </nav>
    `;

    document.getElementById("navbar-container").innerHTML = navbar;
}

loadNavbar();