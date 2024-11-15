const stages = ["stage", "mazeGame", "sillyQuiz", "heartAnimation"];
let stageIndex = 0;

document.getElementById("nextButton").addEventListener("click", nextStage);
document.getElementById("finalMessageButton").addEventListener("click", showFinalMessage);

function nextStage() {
    document.getElementById(stages[stageIndex]).classList.add("hidden");
    stageIndex++;
    document.getElementById(stages[stageIndex]).classList.remove("hidden");
}



// Variables to keep track of the character positions
const bubu = document.getElementById('bubu');
const mazeContainer = document.getElementById('mazeContainer');
const dudu = document.getElementById('dudu');

// Set initial positions for Bubu and Dudu (for example)
let bubuX = 0;
let bubuY = 0;
let duduX = 160; // Position of Dudu
let duduY = 160; // Position of Dudu

// Move Bubu on key press
document.addEventListener('keydown', (e) => {
    const step = 20; // Number of pixels Bubu moves per key press
    if (e.key === 'ArrowUp') {
        bubuY = Math.max(0, bubuY - step);
    } else if (e.key === 'ArrowDown') {
        bubuY = Math.min(mazeContainer.clientHeight - 40, bubuY + step);
    } else if (e.key === 'ArrowLeft') {
        bubuX = Math.max(0, bubuX - step);
    } else if (e.key === 'ArrowRight') {
        bubuX = Math.min(mazeContainer.clientWidth - 40, bubuX + step);
    }

    // Update Bubu's position
    bubu.style.top = `${bubuY}px`;
    bubu.style.left = `${bubuX}px`;

    // Check if Bubu reaches Dudu
    checkCollision();
});

// Function to check if Bubu reaches Dudu
function checkCollision() {
    if (bubuX < duduX + 40 && bubuX + 40 > duduX && bubuY < duduY + 40 && bubuY + 40 > duduY) {
        alert('Varun found Siddhi! 🎉');
        // Move to the next stage, or you can trigger any other event
        document.getElementById('mazeGame').classList.add('hidden');
        document.getElementById('sillyQuiz').classList.remove('hidden');
    }
}

// Show the maze game when the adventure starts
document.getElementById('nextButton').addEventListener('click', () => {
    document.getElementById('stage').classList.add('hidden');
    document.getElementById('mazeGame').classList.remove('hidden');
});

const quizOptions = document.querySelectorAll(".quizOption");

// Add event listener to each option
quizOptions.forEach(option => {
    option.addEventListener("click", () => {
        alert("Correct answer! 🎉");
        // Move to the next stage (heart animation)
        document.getElementById("sillyQuiz").classList.add("hidden");
        document.getElementById("heartAnimation").classList.remove("hidden");
    });
});


// Heart Animation
function showFinalMessage() {
    document.getElementById("heartContainer").innerHTML = "❤️";
    setTimeout(() => {
        alert("I'm truly sorry and hope you can forgive me. Varuns Final quest is to sorry and you are his ultimate treasure!");
        resetGame();
    }, 2000);
}

function resetGame() {
    // Hide the current stage
    document.getElementById(stages[stageIndex]).classList.add("hidden");

    // Reset to the first stage
    stageIndex = 0;
    document.getElementById(stages[stageIndex]).classList.remove("hidden");

    // Reset any necessary elements (like Bubu's position in the maze)
    bubuX = 0;
    bubuY = 0;
    bubu.style.top = `${bubuY}px`;
    bubu.style.left = `${bubuX}px`;

    // Clear the heart animation
    document.getElementById("heartContainer").innerHTML = "";
}
