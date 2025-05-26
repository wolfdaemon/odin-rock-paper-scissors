console.log("Welcome to TOP Rock, Paper, Scissors");

//  INPUT userWeaponChoice from userPlayer from UI  
//  INITIALIZE userWeaponChoice as an RPS (i.e., "Rock", "Paper", or "Scissors") value  
let userWeaponChoice = prompt("Chose your weapon. (\"Rock\", \"Paper\", or \"Scissors\"\)");
console.log(userWeaponChoice);

//  COMPUTE userWeaponChoice from userNPC as a random RPS value  
getComputerChoice();
function getComputerChoice() {
  let npcWeaponChoice = Math.floor(Math.random() * 3) + 1; // returns random integer 1-3
  switch (npcWeaponChoice) {
    case 1:
      npcWeaponChoice = "Rock";
    case 2:
      npcWeaponChoice = "Paper";
    case 3:
      npcWeaponChoice = "Scissors";
}

//  INITIALIZE computerWeaponChoice as a to the variable  
//  CASE expression OF:  
//    CONDITION 1 | The value of userWeaponChoice and computerWeaponChoice are the same:  
//      SEQUENCE 1:
//        OUTPUT "DRAW"  
//    CONDITION 2 | The value of userWeaponChoice is "Rock" and the value of computerWeaponChoice is "Paper"  
//      SEQUENCE 2:  
//        OUTPUT "LOSS"  
//    CONDITION 3 | The value of userWeaponChoice is "Rock" and the value of computerWeaponChoice is "Scissors"  
//        OUTPUT "WIN"  
//    CONDITION 4 | The value of userWeaponChoice is "Paper" and the value of computerWeaponChoice is "Rock"  
//        OUTPUT "WIN"  
//    CONDITION 5 | The value of userWeaponChoice is "Paper" and the value of computerWeaponChoice is "Scissors"  
//        OUTPUT "LOSS"  
//    CONDITION 6 | The value of userWeaponChoice is "Scissors" and the value of computerWeaponChoice is "Rock"  
//        OUTPUT "LOSS"  
//    CONDITION 7 | The value of userWeaponChoice is "Scissors" and the value of computerWeaponChoice is "Paper"  
//        OUTPUT "WIN"  
//    ENDCASE  
