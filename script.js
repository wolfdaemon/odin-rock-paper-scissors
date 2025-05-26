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

function game() {

	function roundPlay() {
		getComputerChoice();
		deciderRound();
		roundPlayCount++;

		if (roundPlayCount === 5) {
			deciderGame();
		}
	}

	function deciderGame() {
		if (userPoint > npcPoint) {
			output.textContent += "The Player won the game.\n\n" + "Score:\n" + "\n\t- userPoint: " + userPoint + "\n\t- npcPoint: " + npcPoint;
		} else if (userPoint < npcPoint) {
			output.textContent += "The NPC won the game.\n\n" + "Score:\n" + "\n\t- userPoint: " + userPoint + "\n\t- npcPoint: " + npcPoint;
		} else {
			output.textContent += "The Cat (No One) won the game.\n\n" + "Score:\n" + "\n\t- userPoint: " + userPoint + "\n\t- npcPoint: " + npcPoint;
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
			output.textContent += userWeaponChoice + " is equivalent to " + npcWeaponChoice + "\nInit another round";
		} else if (userWeaponChoice == "rock" && npcWeaponChoice == "paper") { // Rock vs Paper
			output.textContent +=  npcWeaponChoice + " beats " + userWeaponChoice + "\nROUND LOST";
			npcPoint++;
		} else if (userWeaponChoice == "paper" && npcWeaponChoice == "rock") { // Paper vs Rock
			output.textContent += userWeaponChoice + " beats " + npcWeaponChoice + "\nROUND WIN";
			userPoint++;
		} else if (userWeaponChoice == "rock" && npcWeaponChoice == "scissors") { // Rock vs Scissors
			output.textContent += userWeaponChoice + " beats " + npcWeaponChoice + "\nROUND WIN";
			userPoint++;
		} else if (userWeaponChoice == "scissors" && npcWeaponChoice == "rock") { // Scissors vs Rock
			output.textContent += npcWeaponChoice + " beats " + userWeaponChoice + "\nROUND LOST";
			npcPoint++;
		} else if (userWeaponChoice == "scissors" && npcWeaponChoice == "paper") { // Scissors vs Paper
			output.textContent += userWeaponChoice + " beats " + npcWeaponChoice + "\nROUND WIN";
			userPoint++;
		} else if (userWeaponChoice == "paper" && npcWeaponChoice == "scissors") { // Paper vs Scissors
			output.textContent += npcWeaponChoice + " beats " + userWeaponChoice + "\nROUND LOST";
			npcPoint++;
		} else {
			output.textContent += "Please enter a valid value."; // User inputs invalid value
		}
	}

	let userWeaponChoiceMenu = document.querySelector("#menuUserWeaponChoice");

	userWeaponChoiceMenu.addEventListener('click', (event) => {
		let target = event.target;

		switch(target.id) {
			case "rock":
				output.textContent += "rock clicked";
				userWeaponChoice = "rock";
				roundPlay();
				break;
			case "paper":
				output.textContent += "paper clicked";
				userWeaponChoice = "paper";
				roundPlay();
				break;
			case "scissors":
				output.textContent += "scissors clicked";
				userWeaponChoice = "scissors";
				roundPlay();
				break;
		}
	});

	// TODO: Render output.textContent logs to index with line breaks | https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent
	let output = document.querySelector(".output");
	

}
