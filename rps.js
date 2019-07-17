const name = document.getElementById("name");
const playBtn = document.getElementById("playBtn");
const gameScreen = document.getElementById("gameScreen");
const initialScreen = document.getElementById("initialScreen");
const userSelection = document.getElementById("userSelection");
const gameForm = document.getElementById("gameForm");

let game;

class RockPaperScissors {
    constructor(round) {
        this.round = 0;
    }
}

playBtn.addEventListener("click", function (playBtnClickEvent) {

    if (name.value) {
        playBtnClickEvent.preventDefault();

        initialScreen.classList.add("hidden");

        gameScreen.classList.remove("hidden");

        game = new RockPaperScissors();
    }
    if (!name.value) {
        return alert("Please enter a name to continue");
    }
});
