// CREATE ACCESSIBILITY BUTTON
const accessibilityBtn = document.createElement("div");
accessibilityBtn.innerHTML = "♿";
accessibilityBtn.classList.add("accessibility-btn");

// CREATE MENU
const menu = document.createElement("div");
menu.classList.add("accessibility-menu");

menu.innerHTML = `
    <h3>Accessibility</h3>

    <button id="increaseFont">A+ Increase Font</button>

    <button id="decreaseFont">A- Decrease Font</button>

    <button id="resetFont">Reset Font</button>
`;

// ADD TO PAGE
document.body.appendChild(menu);
document.body.appendChild(accessibilityBtn);

// ==========================
// FUNCTIONALITY
// ==========================

let currentFontSize = 16;

// OPEN/CLOSE MENU
accessibilityBtn.addEventListener("click", () => {

    menu.classList.toggle("show");

});

// INCREASE FONT
document.getElementById("increaseFont").addEventListener("click", () => {

    currentFontSize += 2;

    document.documentElement.style.fontSize = currentFontSize + "px";

});

// DECREASE FONT
document.getElementById("decreaseFont").addEventListener("click", () => {

    currentFontSize -= 2;

    document.documentElement.style.fontSize = currentFontSize + "px";

});

// RESET FONT
document.getElementById("resetFont").addEventListener("click", () => {

    currentFontSize = 16;

    document.documentElement.style.fontSize = "16px";

});