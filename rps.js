"use strict";

const menu = document.getElementById("menu");
const menuForm = document.getElementById("menuForm");
const nameInput = document.getElementById("nameInput");

const game = document.getElementById("game");
const gameForm = document.getElementById("gameForm");
const userSelection = document.getElementById("userSelection");
const gameHistory = document.getElementById("gameHistory");

class RockPaperScissors {
  constructor(name) {
    this.name = name;
    this.round = 0;
  }

  getSelectionText(selection) {
    if (selection === 0) {
      return `Rock`;
    }

    if (selection === 1) {
      return `Paper`;
    }

    return `Scissors`;
  }

  guess(userGuess) {
    const computerGuess = Math.floor(Math.random() * 3);

    this.round += 1;

    if (userGuess === computerGuess) {
      return `Round ${
        this.round
        }: It's a tie! (Computer: ${this.getSelectionText(computerGuess)}, ${
        this.name
        }: ${this.getSelectionText(userGuess)})`;
    }

    const winnerName =
      (userGuess === 0 && computerGuess === 2) ||
        (userGuess === 1 && computerGuess === 0) ||
        (userGuess === 2 && computerGuess === 1)
        ? this.name
        : `Computer`;

    return `Round ${
      this.round
      }: ${winnerName} wins! (Computer chose: ${this.getSelectionText(
        computerGuess
      )}, ${this.name} chose: ${this.getSelectionText(userGuess)})`;
  }
}




menuForm.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const name = nameInput.value;

  if (!name) {
    return alert("Please enter a name to continue");
  }

  setupGame(name);
});

function setupGame(name) {
  const rps = new RockPaperScissors(name);

  menu.classList.add("hidden");
  game.classList.remove("hidden");

  gameForm.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const output = rps.guess(parseInt(userSelection.value, 10));

    const outputListItem = document.createElement("ul");
    const outputTextNode = document.createTextNode(output);

    outputListItem.appendChild(outputTextNode);

    gameHistory.appendChild(outputListItem);
  });


}
