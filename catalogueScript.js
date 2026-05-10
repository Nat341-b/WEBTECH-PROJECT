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



function Popup(index){
    
}