/**
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2024  Michael "Cal" Krug
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 */

//  INPUT userWeaponChoice from userPlayer from UI
//  INITIALIZE userWeaponChoice as an RPS (i.e., "Rock", "Paper", or "Scissors") value
let userWeaponChoice;
let npcWeaponChoice;
let userPoint = 0;
let npcPoint = 0;

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
        userWeaponChoice = prompt("Welcome to Odin's Rock, Paper, Scissors!\n\nChoose your weapon:\n- \"Rock\"\n- \"Paper\"\n- \"Scissors\"");

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
