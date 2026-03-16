// ELEMENTS
const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
const splash = document.getElementById("splash");
const countdown = document.getElementById("countdown");
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");
const gameOverScreen = document.getElementById("gameover");
const finalScore = document.getElementById("finalScore");


// GAME STATE
let jumping = false;
let score = 0;
let level = 1;
let speed = 2;
let gameStarted = false;


// START GAME
function startGame() {

    let timeLeft = 3;
    countdown.innerHTML = timeLeft;

    const timer = setInterval(() => {

        timeLeft--;
        countdown.innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            countdown.innerHTML = "";
            splash.style.display = "none";
            gameStarted = true;
        }

    }, 1000);
}


// SPACEBAR CONTROL
document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {
        e.preventDefault();
        if (gameStarted) jump();
    }

});


// RANDOMIZE HOLE + SCORE
hole.addEventListener("animationiteration", () => {

    const random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";

    if (!gameStarted) return;

    score++;
    updateLevel();
    updateHUD();

});


// MAIN GAME LOOP
setInterval(() => {

    if (!gameStarted) return;

    const characterTop = parseInt(getComputedStyle(character).top);

    // gravity
    if (!jumping) {
        character.style.top = characterTop + 3 + "px";
    }

    const blockLeft = parseInt(getComputedStyle(block).left);
    const holeTop = parseInt(getComputedStyle(hole).top);
    const cTop = -(500 - characterTop);

    const hitBlock =
        blockLeft < 20 &&
        blockLeft > -50 &&
        (cTop < holeTop || cTop > holeTop + 130);

    const hitGround = characterTop > 480;

    if (hitBlock || hitGround) {
        gameOver();
    }

}, 10);


// JUMP FUNCTION
function jump() {

    jumping = true;
    let jumpCount = 0;

    const jumpInterval = setInterval(() => {

        const characterTop = parseInt(getComputedStyle(character).top);

        if (characterTop > 6 && jumpCount < 15) {
            character.style.top = characterTop - 5 + "px";
        }

        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = false;
        }

        jumpCount++;

    }, 10);
}


// LEVEL SYSTEM
function updateLevel() {

    if (score % 10 === 0) {

        level++;
        speed -= 0.2;

        if (speed < 0.8) speed = 0.8;

        setObstacleSpeed();
    }

}


// UPDATE HUD
function updateHUD() {

    scoreDisplay.innerHTML = "Score: " + score;
    levelDisplay.innerHTML = "Level: " + level;

}


// GAME OVER
function gameOver() {

    gameStarted = false;

    finalScore.innerHTML = "Score: " + score;

    gameOverScreen.style.display = "flex";
}


// RESET GAME
function resetGame() {

    score = 0;
    level = 1;
    speed = 2;

    gameStarted = false;
    jumping = false;

    character.style.top = "100px";

    setObstacleSpeed();

    updateHUD();

    splash.style.display = "flex";
}

function setObstacleSpeed() {
    block.style.animationDuration = speed + "s";
    hole.style.animationDuration = speed + "s";
}

function restartGame(){

    score = 0;
    level = 1;
    speed = 2;

    jumping = false;
    gameStarted = true;

    character.style.top = "100px";

    block.style.animationDuration = "2s";
    hole.style.animationDuration = "2s";

    scoreDisplay.innerHTML = "Score: 0";
    levelDisplay.innerHTML = "Level: 1";

    gameOverScreen.style.display = "none";
}