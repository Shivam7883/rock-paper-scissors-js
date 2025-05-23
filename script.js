console.log("I have not made it case sensitive so please type either `rock`, `paper` or `scissors`");
let humanchoice=0
let computerchoic=0
for (let i = 0; i < 5; i++) {
    game = prompt('Please enter rock, paper or scissors');
    getInput(game)
}

function getInput(){
    if (game === "rock" || game === "paper" || game === "scissors") {
        let computerMove = getComputerChoice();

        console.log("You chose:", game);
        console.log("Computer chose:", computerMove);
        if (
        (game === "rock" && computerMove === "scissors") ||
        (game === "paper" && computerMove === "rock") ||
        (game === "scissors" && computerMove === "paper")
    ) {
          humanchoice += 1;
          console.log("you won, your updated score",humanchoice);
        
      } else if (game === computerMove) {
        console.log("draw");
      } else if(
        (computerMove === "rock" && game === "scissors") ||
        (computerMove === "paper" && game === "rock") ||
        (computerMove === "scissors" && game === "paper")
      ){  
          computerchoic = computerchoic+1;
          console.log("computer won, updated score of computer", computerchoic);
        
    
    }else {
        console.log("Try again")

    }
}
}

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    let compOutput = Math.floor(Math.random() * choice.length);
    return choice[compOutput];
}

function result(){
    if(humanchoice>computerchoic){
        console.log("Congrats, you won the game")
    }else if (computerchoic>humanchoice){
        console.log("Too bad, you lost the game")
    }else{
        console.log("Its a draw, nobody won")
    }
}
result();

    

    









