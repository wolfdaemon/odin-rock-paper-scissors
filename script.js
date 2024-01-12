//  INPUT userWeaponChoice from userPlayer from UI  
//  INITIALIZE userWeaponChoice as an RPS (i.e., "Rock", "Paper", or "Scissors") value  
let userWeaponChoice = prompt("Welcome to TOP Rock, Paper, Scissors!\n\nChoose your weapon:\n- \"Rock\"\n- \"Paper\"\n- \"Scissors\"");
let npcWeaponChoice;

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
  console.log("This is a tie.");
} else if ((userWeaponChoice == "Rock" || userWeaponChoice == "rock") && (npcWeaponChoice == "Paper" || npcWeaponChoice == "paper")) { // Rock vs Paper
  console.log(npcWeaponChoice + " beats " + userWeaponChoice + "\nYOU LOSE");
} else if ((userWeaponChoice == "Paper" || userWeaponChoice == "paper") && (npcWeaponChoice == "Rock" || npcWeaponChoice == "rock")) { // Paper vs Rock
  console.log(userWeaponChoice + " beats " + npcWeaponChoice + "\nYOU WIN");
} else if ((userWeaponChoice == "Rock" || userWeaponChoice == "rock") && (npcWeaponChoice == "Scissors" || npcWeaponChoice == "scissors")) { // Rock vs Scissors
  console.log(userWeaponChoice + " beats " + npcWeaponChoice + "\nYOU WIN");
} else if ((userWeaponChoice == "Scissors" || userWeaponChoice == "scissors") && (npcWeaponChoice == "Rock" || npcWeaponChoice == "rock")) { // Scissors vs Rock
  console.log(npcWeaponChoice + " beats " + userWeaponChoice + "\nYOU LOSE");
} else if ((userWeaponChoice == "Scissors" || userWeaponChoice == "scissors") && (npcWeaponChoice == "Paper" || npcWeaponChoice == "paper")) { // Scissors vs Paper
  console.log(userWeaponChoice + " beats " + npcWeaponChoice + "\nYou win");
} else if ((userWeaponChoice == "Paper" || userWeaponChoice == "paper") && (npcWeaponChoice == "Scissors" || npcWeaponChoice == "scissors")) { // Paper vs Scissors
  console.log(npcWeaponChoice + " beats " + userWeaponChoice + "\nYOU LOSE");
} else {
  console.error("Please enter a valid value."); // User inputs invalid value
}
