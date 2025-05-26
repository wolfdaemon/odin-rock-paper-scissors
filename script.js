/**
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2025 Michael "Cal" Krug
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

let userWeaponChoice;
let npcWeaponChoice;
let userPoint = 0;
let npcPoint = 0;
let roundPlayCount = 0;
let countPlayGame = 0;

function game() {

	function roundPlay() {
		getComputerChoice();
		deciderRound();
		roundPlayCount++;

		if (roundPlayCount === 5) {
			deciderGame();
			let buttons = document.querySelectorAll("button");
			buttons.forEach((button) => {
				button.disabled = true;
			});
			output.textContent += "\r\n\n🗘  RELOAD CURRENT PAGE 🗘";
		}

	}

	function deciderGame() {
		if (userPoint > npcPoint) {
			output.textContent += "\r\nThe Player won the game.\r\n\n" + "Score:\r\n" + "\r\n\t- userPoint: " + userPoint + "\r\n\t- npcPoint: " + npcPoint;
		} else if (userPoint < npcPoint) {
			output.textContent += "\r\nThe NPC won the game.\r\n\n" + "Score:\r\n" + "\r\n\t- userPoint: " + userPoint + "\r\n\t- npcPoint: " + npcPoint;
		} else {
			output.textContent += "\r\nThe Cat (No One) won the game.\r\n\n" + "Score:\r\n" + "\r\n\t- userPoint: " + userPoint + "\r\n\t- npcPoint: " + npcPoint;
		}
	}
    
	function getComputerChoice() {
	  npcWeaponChoice = Math.floor(Math.random() * 3) + 1;
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

	function deciderRound() {
		if (userWeaponChoice == npcWeaponChoice) {
			output.textContent += userWeaponChoice + " is equivalent to " + npcWeaponChoice + "\r\nInit another round\r\n";
		} else if (userWeaponChoice == "rock" && npcWeaponChoice == "paper") { // Rock vs Paper
			output.textContent +=  npcWeaponChoice + " beats " + userWeaponChoice + "\r\nROUND LOST\r\n";
			npcPoint++;
		} else if (userWeaponChoice == "paper" && npcWeaponChoice == "rock") { // Paper vs Rock
			output.textContent += userWeaponChoice + " beats " + npcWeaponChoice + "\r\nROUND WIN\r\n";
			userPoint++;
		} else if (userWeaponChoice == "rock" && npcWeaponChoice == "scissors") { // Rock vs Scissors
			output.textContent += userWeaponChoice + " beats " + npcWeaponChoice + "\r\nROUND WIN\r\n";
			userPoint++;
		} else if (userWeaponChoice == "scissors" && npcWeaponChoice == "rock") { // Scissors vs Rock
			output.textContent += npcWeaponChoice + " beats " + userWeaponChoice + "\r\nROUND LOST\r\n";
			npcPoint++;
		} else if (userWeaponChoice == "scissors" && npcWeaponChoice == "paper") { // Scissors vs Paper
			output.textContent += userWeaponChoice + " beats " + npcWeaponChoice + "\r\nROUND WIN\r\n";
			userPoint++;
		} else if (userWeaponChoice == "paper" && npcWeaponChoice == "scissors") { // Paper vs Scissors
			output.textContent += npcWeaponChoice + " beats " + userWeaponChoice + "\r\nROUND LOST\r\n";
			npcPoint++;
		} else {
			output.textContent += "\r\nPlease enter a valid value.\r\n"; // User inputs invalid value
		}
	}

	let userWeaponChoiceMenu = document.querySelector("#menuUserWeaponChoice");

	userWeaponChoiceMenu.addEventListener('click', (event) => {
		let target = event.target;

		switch(target.id) {
			case "rock":
				output.textContent += "\r\nrock clicked\r\n";
				userWeaponChoice = "rock";
				roundPlay();
				break;
			case "paper":
				output.textContent += "\r\npaper clicked\r\n";
				userWeaponChoice = "paper";
				roundPlay();
				break;
			case "scissors":
				output.textContent += "\r\nscissors clicked\r\n";
				userWeaponChoice = "scissors";
				roundPlay();
				break;
		}
	});

	countPlayGame++;

	let output = document.querySelector(".output");

	output.textContent += "GAME STARTED\r\n";

}
