'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const holeInfoEl = document.getElementById('hole-info');
const totalParEl = document.getElementById('total-par');
const diceEl = document.querySelector('.dice');
const btnRoll0 = document.getElementById('btn--roll-0');
const btnRoll1 = document.getElementById('btn--roll-1');
const btnNew = document.querySelector('.btn--new');
const btnAuto1 = document.getElementById('btn--auto-1');

let scores,
  currentScores,
  activePlayer,
  playing,
  currentPar,
  swings,
  totalPar,
  holeNumber,
  finishedHoles;

// Initialize game
const init = function () {
  scores = [0, 0];
  currentScores = [0, 0];
  swings = [0, 0];
  activePlayer = 0;
  playing = true;
  totalPar = 0; // Initialize overall par to 0
  holeNumber = 1;
  finishedHoles = [false, false];

  diceEl.classList.add('hidden');
  updateUI();
  newHole();
};

const updateUI = function () {
  document.getElementById(`total--0`).textContent = `Scorecard: ${scores[0]}`;
  document.getElementById(`total--1`).textContent = `Scorecard: ${scores[1]}`;
  document.getElementById(
    `current--0`
  ).textContent = `Distance to hole: ${currentScores[0]}00 meters`;
  document.getElementById(
    `current--1`
  ).textContent = `Distance to hole: ${currentScores[1]}00 meters`;
  document.getElementById(
    `swings--0`
  ).textContent = `Shots from tee: ${swings[0]}`;
  document.getElementById(
    `swings--1`
  ).textContent = `Shots from tee: ${swings[1]}`;
  holeInfoEl.textContent = `Hole ${holeNumber} - Par ${currentPar}`;
  totalParEl.textContent = `Overall ${totalPar} Par`;
  const parScore0 = scores[0] - totalPar;
  const parScore1 = scores[1] - totalPar;
  document.getElementById(`name--0`).textContent = `Player 1: ${
    holeNumber === 1 ? '' : parScore0 + ' Par'
  }`;
  document.getElementById(`name--1`).textContent = `Player 2: ${
    holeNumber === 1 ? '' : parScore1 + ' Par'
  }`;
};

const newHole = function () {
  currentPar = Math.floor(Math.random() * 3) + 3;
  currentScores = [currentPar, currentPar];
  swings = [0, 0];
  finishedHoles = [false, false];
  updateUI();
};

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  btnRoll0.textContent = activePlayer === 0 ? 'Swing' : 'Waiting...';
  btnRoll1.textContent = activePlayer === 1 ? 'Swing' : 'Waiting...';
  if (finishedHoles[0] && finishedHoles[1]) {
    if (holeNumber < 9) {
      // Add the hole's par to the overall par after both players have finished the hole and incriment hole number
      totalPar += currentPar;
      holeNumber++;
      newHole();
    } else {
      totalPar += currentPar;
      updateUI();
      playing = false;
      checkForWinner();
    }
  }
};

const checkForWinner = function () {
  if (finishedHoles[0] && finishedHoles[1]) {
    playing = false;
    let winnerMessage = '';
    if (scores[0] < scores[1]) {
      winnerMessage = `Player 1 wins with a score of ${scores[0]} to ${scores[1]}`;
    } else if (scores[0] > scores[1]) {
      winnerMessage = `Player 2 wins with a score of ${scores[1]} to ${scores[0]}`;
    } else {
      winnerMessage = "It's a tie!";
    }
    alert(`Game over! Total Par: ${totalPar}\n${winnerMessage}`);
  }
};

const rollDice = function () {
  if (playing && !finishedHoles[activePlayer]) {
    const roll = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `assets/images/dice-${roll}.png`;
    diceEl.classList.remove('hidden');
    swings[activePlayer]++;

    if (roll === 1) {
      displayMessage('Sliced left, FORE!!');
    } else if (roll === 6) {
      displayMessage('Sliced right, FORE!!');
    } else if (roll === 2 || roll === 4) {
      displayMessage('Great shot!');
      currentScores[activePlayer] -= 2; // Decrease distance to hole
    } else if (roll === 3 || roll === 5) {
      displayMessage('Bit short');
      currentScores[activePlayer]--; // Decrease distance to hole
    }

    if (currentScores[activePlayer] <= 0) {
      finishedHoles[activePlayer] = true;
      scores[activePlayer] += swings[activePlayer];
      if (currentScores[activePlayer] <= 0) {
        currentScores[activePlayer] = 0;
        displayMessage('IN THE HOLE!');
        setTimeout(() => {
          diceEl.classList.add('hidden'); // Hide the dice after 2 seconds
          checkForWinner();
        }, 1000);
      }
      updateUI(); // Update UI after adding to the score
      switchPlayer();
    } else {
      updateUI(); // Update UI if the current score changes
    }
  }
};
const autoPlay = function () {
  if (activePlayer === 1 && !finishedHoles[1] && playing) {
    const roll = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `assets/images/dice-${roll}.png`;
    diceEl.classList.remove('hidden');
    swings[activePlayer]++;

    if (roll === 1) {
      displayMessage('Sliced left, FORE!!');
    } else if (roll === 6) {
      displayMessage('Sliced right, FORE!!');
    } else if (roll === 2 || roll === 4) {
      displayMessage('Great shot!');
      currentScores[activePlayer] -= 2; // Decrease distance to hole
    } else if (roll === 3 || roll === 5) {
      displayMessage('Bit short');
      currentScores[activePlayer]--; // Decrease distance to hole
    }

    if (currentScores[activePlayer] <= 0) {
      finishedHoles[activePlayer] = true;
      scores[activePlayer] += swings[activePlayer];
      if (currentScores[activePlayer] <= 0) {
        currentScores[activePlayer] = 0;
        displayMessage('IN THE HOLE!');
        setTimeout(() => {
          diceEl.classList.add('hidden'); // Hide the dice after 2 seconds
          checkForWinner();
        }, 1000);
      }
      updateUI(); // Update UI after adding to the score
      switchPlayer();
    } else {
      updateUI(); // Update UI if the current score changes
    }

    // Check if player 2 has finished the hole, if not, continue auto-play
    if (!finishedHoles[1]) {
      setTimeout(autoPlay, 1000); // Auto-play with a delay
    }
  }
};

const displayMessage = function (message) {
  document.getElementById(`instruction--${activePlayer}`).textContent = message;
  setTimeout(() => {
    if (playing && !finishedHoles[activePlayer]) {
      document.getElementById(`instruction--${activePlayer}`).textContent =
        'Swing away!';
    }
  }, 2000);
};

// Add event listeners
btnAuto1.addEventListener('click', function () {
  if (activePlayer === 1 && !finishedHoles[1] && playing) {
    autoPlay(); // Start auto-play for player 2
  }
});

btnRoll0.addEventListener('click', function () {
  if (activePlayer === 0) rollDice();
});

btnRoll1.addEventListener('click', function () {
  if (activePlayer === 1) rollDice();
});

btnNew.addEventListener('click', init);

init();
