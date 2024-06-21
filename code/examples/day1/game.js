// script.js

const player = document.getElementById('.player');
const gameContainer = document.querySelector('.game-container');

const targets = [];







window.onload = function startGame () {    
    const target = document.createElement('div');
    target.classList.add('target');
    target.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    target.style.top = '0px';
    gameContainer.appendChild(target);
    targets.push(target);
};
