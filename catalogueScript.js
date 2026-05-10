let globalCatData = [];

async function displayCats() {
    const response = await fetch('cats.json');
    const catData = await response.json();
    const container = document.getElementById('catsCard');

    container.innerHTML = ""; //Container clearing after refresh

    catData.forEach((cat, index) => {
        
        const cardHTML = `
            <div class="cat-card">
                <div class="cat-image">
                    <img src="${cat.image}" alt="${cat.name}">
                </div>
                <div class="cat-info">
                    <h3>${cat.name}</h3>
                    <div class="cat-row-meta">
                        <span class="gender">${cat.gender}</span>
                        <span class="age">🎂 ${cat.age}</span>
                        <span class="location">📍 ${cat.location}</span>
                    </div>
                    <button class="view-details-button" onclick="Popup(${index})">View Details</button>
                </div>
            </div>
        `;
        
        container.innerHTML += cardHTML;
    });
}

displayCats();



function filterCats(){

}

//Popup for viewing details for a cat
function Popup(index) {
    const cat = globalCatData[index]; // Grab the specific cat using the index
    const modal = document.getElementById("catModal");
    const modalBody = document.getElementById("modalBody");

    // Inject data into the modal
    modalBody.innerHTML = `
        <img src="${cat.image}" style="width:100%; border-radius:15px; margin-bottom:15px;">
        <h2 style="font-family: 'Fredoka One';">${cat.name}</h2>
        <p><strong>Breed:</strong> ${cat.breed}</p>
        <p><strong>Age:</strong> ${cat.age}</p>
        <p><strong>Gender:</strong> ${cat.gender}</p>
        <p style="margin-top:15px;">${cat.description || "This friendly feline is looking for a forever home!"}</p>
        <button class="adopt-btn">Adopt ${cat.name}</button>
    `;

    modal.style.display = "block"; // Show the modal
}

function closePopup() {
    document.getElementById("catModal").style.display = "none";
}

// Close modal if user clicks anywhere outside of the white box
window.onclick = function(event) {
    const modal = document.getElementById("catModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}