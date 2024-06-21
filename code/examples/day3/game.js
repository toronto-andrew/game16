// script.js

const player = document.getElementById('.player');
const gameContainer = document.querySelector('.game-container');

const targets = [];


function spawnTarget() {
    const target = document.createElement('div');
    target.classList.add('target');
    target.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    target.style.top = '0px';
    gameContainer.appendChild(target);
    targets.push(target);
}

function update() {
    targets.forEach((target, index) => {
        let top = parseInt(target.style.top);
        if (top > window.innerHeight) {
            target.remove();
            targets.splice(index, 1);
        } else {
            target.style.top = `${top + 2}px`;
        }
    });

    requestAnimationFrame(update);
}


function startGame() {
    spawnTarget();
    setInterval(spawnTarget, 2000); // Spawn a new target every 2 seconds
    update();
}

window.onload = startGame;