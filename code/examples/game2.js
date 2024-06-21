// script.js

const player = document.getElementById('.player');
const gameContainer = document.querySelector('.game-container');

let playerX = window.innerWidth / 2;
const playerSpeed = 10;

const projectiles = [];
const targets = [];

// Handle player movement
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        playerX = Math.max(playerX - playerSpeed, 0);
    } else if (event.key === 'ArrowRight') {
        playerX = Math.min(playerX + playerSpeed, window.innerWidth - player.offsetWidth);
    } else if (event.key === ' ') {
        shoot();
    }
    player.style.left = `${playerX}px`;
});

function shoot() {
    const projectile = document.createElement('div');
    projectile.classList.add('projectile');
    projectile.style.left = `${playerX + player.offsetWidth / 2 - 5}px`;
    projectile.style.bottom = `${player.offsetHeight + 20}px`;
    gameContainer.appendChild(projectile);
    projectiles.push(projectile);
}

function spawnTarget() {
    const target = document.createElement('div');
    target.classList.add('target');
    target.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    target.style.top = '0px';
    gameContainer.appendChild(target);
    targets.push(target);
}

function update() {
    projectiles.forEach((projectile, index) => {
        let bottom = parseInt(projectile.style.bottom);
        if (bottom > window.innerHeight) {
            projectile.remove();
            projectiles.splice(index, 1);
        } else {
            projectile.style.bottom = `${bottom + 5}px`;
        }
    });

    targets.forEach((target, index) => {
        let top = parseInt(target.style.top);
        if (top > window.innerHeight) {
            target.remove();
            targets.splice(index, 1);
        } else {
            target.style.top = `${top + 2}px`;
        }
    });

    checkCollisions();

    requestAnimationFrame(update);
}

function checkCollisions() {
    projectiles.forEach((projectile, pIndex) => {
        const pRect = projectile.getBoundingClientRect();
        targets.forEach((target, tIndex) => {
            const tRect = target.getBoundingClientRect();
            if (
                pRect.left < tRect.right &&
                pRect.right > tRect.left &&
                pRect.top < tRect.bottom &&
                pRect.bottom > tRect.top
            ) {
                target.remove();
                projectile.remove();
                targets.splice(tIndex, 1);
                projectiles.splice(pIndex, 1);
            }
        });
    });
}

function startGame() {
    spawnTarget();
    setInterval(spawnTarget, 2000); // Spawn a new target every 2 seconds
    //update();
}

window.onload = startGame;
