console.log ("Hello world")

const possibleChoices = ['rock', 'paper', 'scissors']
console.log(possibleChoices);

function getComputerChoice() {
    const computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    if (computerChoice == 1) {
        return 'rock';
    }
    else if (computerChoice == 2) {
        return 'paper';
    }
    else {
        return 'scissors'

    }

    return computerChoice
}

//console.log(getComputerChoice())


function getHumanChoice() {
    const humanChoice = prompt("Enter your choice:" + " " + possibleChoices)

    if (humanChoice.toLowerCase() !== "rock" && humanChoice.toLowerCase() !== "paper" && humanChoice.toLowerCase() !== "scissors"){
         humanChoice = prompt("choose between rock, paper and scissors")
        
    }
     
    return humanChoice
   
}
//console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log (`the computer chose ${computerChoice} making it a tie`)
    }
    
    else if (humanChoice == 'scissors' && computerChoice == "paper") {
        humanScore += 1;
        console.log(`you won, the computer chose ${computerChoice}, score is  ${humanScore} to ${computerScore}`)
    }

    else if (humanChoice == 'rock' && computerChoice == "scissors") {
        humanScore +=1;
        console.log(`you won, the computer chose ${computerChoice}, score is  ${humanScore} to ${computerScore}`)
    }

    else if (humanChoice == 'paper' && computerChoice == "rocks") {
        humanScore +=1;
        console.log(`you won, the computer chose ${computerChoice}, score is  ${humanScore} to ${computerScore}`)
    }

    else {
        computerScore +=1;
        console.log (`the computer chose ${computerChoice} you lost, score is  ${humanScore} to ${computerScore}`)
        
    }


}

    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
  
   playRound(humanChoice, computerChoice)

   function playGame() {
    for (i=0; i<5; i++) {
        playRound(getComputerChoice(), getHumanChoice())
    }
    console.log(`the game is over, you have ${humanScore} out of 5 games`)

   }

   playGame()
