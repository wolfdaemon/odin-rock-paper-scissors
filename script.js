//  INPUT userWeaponChoice from userPlayer from UI
//  INITIALIZE userWeaponChoice as an RPS (i.e., "Rock", "Paper", or "Scissors") value
let userWeaponChoice;
let npcWeaponChoice;
let userPoint = 0;
let npcPoint = 0;

game();

function game() { // Consists of five rounds, winner is decided based on points

playRound();
playRound();
playRound();
playRound();
playRound();

// Winner decider, declarator
if (userPoint > npcPoint) {
console.log("The Player won the game.\n\n" + "Score:\n" + "\n\t- userPoint: " + userPoint + "\n\t- npcPoint: " + npcPoint);
} else if (userPoint < npcPoint) {
console.log("The NPC won the game.\n\n" + "Score:\n" + "\n\t- userPoint: " + userPoint + "\n\t- npcPoint: " + npcPoint);
} else {
console.log("The Cat (No One) won the game.\n\n" + "Score:\n" + "\n\t- userPoint:" + userPoint + "\n\t- npcPoint: " + npcPoint);
}

    function playRound() {

        //  INPUT userWeaponChoice from userPlayer from UI
        //  INITIALIZE userWeaponChoice as an RPS (i.e., "Rock", "Paper", or "Scissors") value
        userWeaponChoice = prompt("Welcome to TOP Rock, Paper, Scissors!\n\nChoose your weapon:\n- \"Rock\"\n- \"Paper\"\n- \"Scissors\"");

        //  COMPUTE userWeaponChoice from userNPC as a random RPS value
        getComputerChoice();
        function getComputerChoice() {
          npcWeaponChoice = Math.floor(Math.random() * 3) + 1; // returns random integer 1-3
          switch (npcWeaponChoice) {
            case 1:
              npcWeaponChoice = "rock";
              break;
            case 2:
              npcWeaponChoice = "paper";
              break;
            case 3:
              npcWeaponChoice = "scissors";
              break;
            }
        }
        getUserChoice();
        function getUserChoice() {
          userWeaponChoice = userWeaponChoice.toLowerCase();
        }

        if (userWeaponChoice == npcWeaponChoice) { // TODO: Add method to values to make "Choice" values have capitalization on the first letter, possibly for output
          console.log(userWeaponChoice + " is equivalent to " + npcWeaponChoice + "\nInit another round");
          playRound(); // account for ties by replaying the round
        } else if (userWeaponChoice == "rock" && npcWeaponChoice == "paper") { // Rock vs Paper
          console.log(npcWeaponChoice + " beats " + userWeaponChoice + "\nROUND LOST");
          npcPoint++;
        } else if (userWeaponChoice == "paper" && npcWeaponChoice == "rock") { // Paper vs Rock
          console.log(userWeaponChoice + " beats " + npcWeaponChoice + "\nROUND WIN");
          userPoint++;
        } else if (userWeaponChoice == "rock" && npcWeaponChoice == "scissors") { // Rock vs Scissors
          console.log(userWeaponChoice + " beats " + npcWeaponChoice + "\nROUND WIN");
          userPoint++;
        } else if (userWeaponChoice == "scissors" && npcWeaponChoice == "rock") { // Scissors vs Rock
          console.log(npcWeaponChoice + " beats " + userWeaponChoice + "\nROUND LOST");
          npcPoint++;
        } else if (userWeaponChoice == "scissors" && npcWeaponChoice == "paper") { // Scissors vs Paper
          console.log(userWeaponChoice + " beats " + npcWeaponChoice + "\nROUND WIN");
          userPoint++;
        } else if (userWeaponChoice == "paper" && npcWeaponChoice == "scissors") { // Paper vs Scissors
          console.log(npcWeaponChoice + " beats " + userWeaponChoice + "\nROUND LOST");
          npcPoint++;
        } else {
          console.error("Please enter a valid value."); // User inputs invalid value
        }
    }
}
