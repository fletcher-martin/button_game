
var level = 0;
var gameStarted = false;

// button actions
function buttonSound(id) {
    new Audio(`sounds/${id}.mp3`).play();
}

function buttonAnimation(id) {
    document.getElementById(id).classList.add("pressed");
    setTimeout(() => {
    document.getElementById(id).classList.remove("pressed");
    }, 100);
}

// user click
var userClickList = [];
function addUserClick(id) {
    userClickList.push(id);
    // console.log(userClickList);
}

// random clicks
var colorKey = {1: 'green', 2: 'red', 3: 'yellow', 4: 'blue'};
var randomClickList = [];

function selectRandomColor() {
    var num = Math.floor(Math.random() * 4) + 1;
    var color = colorKey[num];
    buttonSound(color);
    buttonAnimation(color);
    randomClickList.push(color);
    level ++;
    console.log('random color selectetd');
}


function gameOver() {
    new Audio('sounds/wrong.mp3').play();
    userClickList = [];
    randomClickList = [];
    document.querySelector('body').classList.add('game-over');
    setTimeout(() => {
        document.querySelector('body').classList.remove('game-over');
    }, 50);
    level = 0;
    document.querySelector('h1').innerText = "Game Over, Press Any Key to Restart";
    gameStarted = false;

}

function userRight() {
    var pos = userClickList.length - 1;
    if (JSON.stringify(userClickList) === JSON.stringify(randomClickList)) {
        userClickList = [];
        selectRandomColor();
        document.querySelector('h1').innerText = `Level ${level}`;
        console.log('random number');
        console.log(randomClickList);
    } else if (userClickList[pos] === randomClickList[pos]) {
        console.log('valid click');
    } else {
        gameOver();
        console.log('game over');
        console.log(gameStarted);
    }
}

function startGame() {
    document.addEventListener("keydown", function(event) {
        // selectRandomColor();
        alert(event);
    });
}

function playGame(id) {
    buttonSound(id);
    // console.log('sound');
    buttonAnimation(id);
    // console.log('animation');
    addUserClick(id);
    console.log('user entry added');
    console.log(userClickList);
    console.log(randomClickList);
    setTimeout(userRight, 500);
    
}


document.addEventListener("keydown", function() {
    if (gameStarted === false) {
        gameStarted = true;
        // console.log('key detected');
        selectRandomColor();
        document.querySelector('h1').innerText = 'Level 1';
    } else {

    }
})
