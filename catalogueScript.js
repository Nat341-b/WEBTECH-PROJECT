let globalCatData = [];

async function displayCats() {
    try {
        const response = await fetch('cats.json');
        const catData = await response.json();
        
        // Save to global so filterCats and Popup can see it
        globalCatData = catData; 
        
        // Use the helper function instead of writing the loop here again
        renderCards(globalCatData); 
    } catch (error) {
        console.error("Error fetching cats:", error);
    }
}

displayCats();

//Search-bar function starts here

//Show suggestions when user inputs
function showSuggestions() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const box = document.getElementById('suggestionsBox');
    
    if (query.length < 1) {
        box.style.display = "none";
        return;
    }

    // Filter names or breeds that START with the query
    const matches = globalCatData.filter(cat => 
        cat.name.toLowerCase().startsWith(query) || 
        cat.location.toLowerCase().startsWith(query)
    ).slice(0, 2); // Limit to top 5 results (object 1 to 5)

    if (matches.length > 0) {
        box.innerHTML = matches.map(cat => `
         <div class="suggest-item" onclick="selectSuggestion('${cat.name}')">
                <strong>${cat.name}</strong>
            </div>
        `).join('');
        box.style.display = "block"; //renders and takes space 
    }
    else
        box.style.display = "none"; //doesn't take/fill any space(none)
}

function selectSuggestion(name) {
    document.getElementById('searchInput').value = name;
    document.getElementById('suggestionsBox').style.display = "none";
    filterCats(); // Trigger your main search function to show the card
}

function filterCats() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    // Filter the array based on name, breed, or location
    const filtered = globalCatData.filter(cat => {
        return cat.name.toLowerCase().includes(query) || 
               cat.location.toLowerCase().includes(query);
    });

    renderCards(filtered); // Display only the matches
}

//Render the searched cats from user-input
function renderCards(data) {
    const container = document.getElementById('catsCard');
    container.innerHTML = ""; 

    data.forEach((cat) => {
        // Use cat.name (or an ID) instead of index to stay accurate during search
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
                    <button class="view-details-button" onclick="PopupByName('${cat.name}')">View Details</button>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Close dropdown if user clicks elsewhere
window.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper')) {
        document.getElementById('suggestionsBox').style.display = "none";
    }
});

//Shows cards that obey the user query
function PopupByName(name) {
    // Find the cat in the main list that matches the name
    const cat = globalCatData.find(c => c.name === name);
    const modal = document.getElementById("catModal");
    const modalBody = document.getElementById("modalBody");

    if (cat) {
        modalBody.innerHTML = `
            <img class="modal-image" src="${cat.image}">
            <h2>${cat.name}</h2>
            <p><strong>Age:</strong> ${cat.age}</p>
            <p>📍 ${cat.location}</p>
            <p> 📞 Owner Contact ${cat.owner} </p>
            <button class="view-details-button" onclick="AdoptPet('${cat.name}')">Adopt ${cat.name}</button>
        `;
        modal.style.display = "block";
    }
}
//Search bar function ends here

//Popup for viewing details for a cat starts here
function Popup(index) {
    const cat = globalCatData[index]; 
    const modal = document.getElementById("catModal");
    const modalBody = document.getElementById("modalBody");

    // We only inject the stuff that CHANGES for each cat
    modalBody.innerHTML = `
        <img  src="${cat.image}" style="width:100%; height:250px; object-fit:cover; border-radius:15px; margin-bottom:15px;">
        <h2 class="popup-text">${cat.name}</h2>
        
        <div class="popup-meta">
            <span><strong>Age:</strong> ${cat.age}</span>
            <span><strong>Gender:</strong> ${cat.gender}</span>
        </div>
        
        <p style="margin: 15px 0; color: #444;">
            <strong style="color: #ff7a2f;">📍 Location:</strong> ${cat.location}
        </p>

        <button class="adopt-btn" onclick="Adopt(${index})" style="width: 100%; padding: 12px; background: #ff7a2f; color: white; border: none; border-radius: 10px; font-weight: bold; cursor: pointer;">
            Adopt ${cat.name}
        </button>
    `;

    modal.style.display = "block"; 
}

function AdoptPet(name){
    const cat = globalCatData.find(c => c.name === name);
    window.alert(`You have chosen ${cat.name}, Please contact ${cat.owner} for more information!`);
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
//Popup functions ends here