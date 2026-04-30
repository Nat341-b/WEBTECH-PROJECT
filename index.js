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

/**
 * SECTION: Catch the Mouse Game
 * Logic for moving the mouse and tracking the score
 */
const gameContainer = document.getElementById('game-container');
const mouse = document.getElementById('mouse');
const cat = document.getElementById('cat');
const startBtn = document.getElementById('start-game');
const scoreDisplay = document.getElementById('score');

let score = 0;
let gameActive = false;
let gameTimer;

// Function to move the mouse to a random position within the container
function moveMouse() {
    if (!gameActive) return;

    // Calculate available space (Container size minus mouse size)
    const maxX = gameContainer.clientWidth - 50;
    const maxY = gameContainer.clientHeight - 50;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    mouse.style.left = randomX + 'px';
    mouse.style.top = randomY + 'px';
}

// Function to start the game
function startGame() {
    score = 0;
    gameActive = true;
    scoreDisplay.innerText = "Score: 0";
    startBtn.innerText = "Game Running...";
    startBtn.disabled = true;

    // Move mouse every 800ms
    gameTimer = setInterval(moveMouse, 800);

    // End game after 20 seconds
    setTimeout(() => {
        endGame();
    }, 20000);
}

// Function to handle clicking the mouse
mouse.addEventListener('click', () => {
    if (gameActive) {
        score++;
        scoreDisplay.innerText = "Score: " + score;

        // Visual feedback (pop effect)
        mouse.style.transform = "scale(1.5)";
        setTimeout(() => {
            mouse.style.transform = "scale(1)";
        }, 100);

        moveMouse(); // Move immediately when caught
    }
});

function endGame() {
    gameActive = false;
    clearInterval(gameTimer);
    startBtn.innerText = "Play Again";
    startBtn.disabled = false;
    alert("Time's up! Your final score is: " + score);
}

// Event Listeners
startBtn.addEventListener('click', startGame);

// Add listener for the main header button
document.getElementById('browseBtn').addEventListener('click', () => {
    showPage('adopt', null);
});

// Add listener for the Learn More button
document.getElementById('learnBtn').addEventListener('click', () => {
    alert("More information about cat care is coming soon!");
});