//Array for computer to choose from
let array = ["Rock", "Paper", "Scissors"];

//Variables
var playerChoice = "";
var computerChoice;
var playerScore = 0;
var computerScore = 0;

//Container for displaying results of match
const container = document.querySelector("#container");
const content = document.createElement("div");
content.style.textAlign = "center";
content.style.fontSize = "32px";
content.style.fontWeight = "bold";

//Displaying scores
const player = document.querySelector(".player-score");
player.style.fontWeight = "bold";
const computer = document.querySelector(".computer-score");
computer.style.fontWeight = "bold";

//Computer chooses random item from array above
var computerGo = () => {
  computerChoice = array[Math.floor(Math.random() * array.length)];
};

//Rock Button
var btn = document.querySelector("#rock");
btn.onclick = () => {
  playerChoice = "rock";
  playRound();
};

//Paper Button
var btn = document.querySelector("#paper");
btn.onclick = () => {
  playerChoice = "paper";
  playRound();
};

//Scissors Button
var btn = document.querySelector("#scissors");
btn.onclick = () => {
  playerChoice = "scissors";
  playRound();
};

//Checks score and ends game if either player or computer reaches 5 points
var check = () => {
  if (playerScore == 10) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    content.textContent = "YOU WIN! Hit start again button to play again!";
  } else if (computerScore == 10) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    content.textContent = "YOU LOSE! Hit start again button to play again!";
  }
};

//After the user selects an option, this function runs to play the game.
var playRound = () => {
  computerGo();
  if (playerChoice === "rock" && computerChoice === "Scissors") {
    content.textContent = "Rock breaks Scissors. You win!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player Score: " + playerScore;
    check();
  } else if (playerChoice === "paper" && computerChoice === "Rock") {
    content.textContent = "Paper covers Rock. You win!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player Score: " + playerScore;
    check();
  } else if (playerChoice === "scissors" && computerChoice === "Paper") {
    content.textContent = "Scissors cuts paper. You win!";
    container.appendChild(content);
    playerScore++;
    player.textContent = "Player Score: " + playerScore;
    check();
  } else if (playerChoice === "scissors" && computerChoice === "Rock") {
    content.textContent = "Rock breaks Scissors. You lose!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer Score: " + computerScore;
    check();
  } else if (playerChoice === "rock" && computerChoice === "Paper") {
    content.textContent = "Paper covers Rock. You lose!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer Score: " + computerScore;
    check();
  } else if (playerChoice === "paper" && computerChoice === "Scissors") {
    content.textContent = "Scissors cuts Paper. You lose!";
    container.appendChild(content);
    computerScore++;
    computer.textContent = "Computer Score: " + computerScore;
    check();
  } else if (playerChoice === "rock" && computerChoice === "Rock") {
    content.textContent = "It's a draw!";
    check();
  } else if (playerChoice === "paper" && computerChoice === "Paper") {
    content.textContent = "It's a draw!";
    check();
  } else if (playerChoice === "scissors" && computerChoice === "Scissors") {
    content.textContent = "It's a draw!";
    check();
  }
};