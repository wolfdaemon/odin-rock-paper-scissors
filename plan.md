# Problem Solving | TOP Rock, Paper, Scissors Project

## Understand the Problem

The problem is that there is a user base that wishes play [Rock, Paper, Scissors](https://en.wikipedia.org/wiki/Rock_paper_scissors).

Implementation will involve these things:

  - Zero-Sum Game Outcomes: The net status improvement for the players is "zero". I.e., in order for one player to WIN, the other *must* LOSE. Otherwise, both sides maintain status quo in a DRAW.
    - [Specific outcomes](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/800px-Rock-paper-scissors.svg.png):
      1. Rock WINs against Scissors, which LOSEs to Rock
      2. Scissors WINs against Paper, which LOSEs to Scissors
      3. Paper WINs against Rock, which LOSEs to Paper
      4. SameTool* DRAWs against SameTool, which means both players LOSE (* "SameTool" being the event both players utilize the same weapon of play [e.g., scissors vs scissors])

This particular program will be an implementation of the game within a web broswer application (webapp) in a plain HTML/CSS/JS stack. The scope of the data used for the games accessibility, simplicity, and behavior allows for this software stack to be ideal for this.

## Plan
### 1. Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.

N/A for iteration one of the project

### 2. What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- The input will be user data.
- The user data will be (text) strings that will be either one of three options:

  1. Rock
  2. Paper
  3. Scissors

#### Future Commentary

Come to think of it, these could also be achieved with *buttons* later. However, in *iteration one* of the project, it will be a console application, so this "button" input idea will be deferred until later.

### 3. What’s the desired output?

The desired output of the program is to:

1. State which player (the user or the program) won the match
2. What selection the user made (e.g. rock), and what selection the computer made (e.g. paper)

### 4. Given your inputs, what are the steps necessary to return the desired output?

Algorithm here is to be copied as a comment and will probably be psuedocode:

  INPUT userWeaponChoice from userPlayer from UI  
  INITIALIZE userWeaponChoice as an RPS (i.e., "Rock", "Paper", or "Scissors") value  
  COMPUTE userWeaponChoice from userNPC as a random RPS value  
  INITIALIZE computerWeaponChoice as a to the variable  
  CASE expression OF:  
    CONDITION 1 | The value of userWeaponChoice and computerWeaponChoice are the same:  
      SEQUENCE 1:
        OUTPUT "DRAW"  
    CONDITION 2 | The value of userWeaponChoice is "Rock" and the value of computerWeaponChoice is "Paper"  
      SEQUENCE 2:  
        OUTPUT "LOSS"  
    CONDITION 3 | The value of userWeaponChoice is "Rock" and the value of computerWeaponChoice is "Scissors"  
        OUTPUT "WIN"  
    CONDITION 4 | The value of userWeaponChoice is "Paper" and the value of computerWeaponChoice is "Rock"  
        OUTPUT "WIN"  
    CONDITION 5 | The value of userWeaponChoice is "Paper" and the value of computerWeaponChoice is "Scissors"  
        OUTPUT "LOSS"  
    CONDITION 6 | The value of userWeaponChoice is "Scissors" and the value of computerWeaponChoice is "Rock"  
        OUTPUT "LOSS"  
    CONDITION 7 | The value of userWeaponChoice is "Scissors" and the value of computerWeaponChoice is "Paper"  
        OUTPUT "WIN"  
    ENDCASE  
