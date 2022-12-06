function getComputerChoice(){
    choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = String(playerSelection).toLowerCase()

    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') || 
    (playerSelection == 'scissors' && computerSelection == 'paper')){
        console.log(playerSelection + 'beats' + computerSelection + '. You Win!')
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || 
    (playerSelection == 'paper' && computerSelection == 'scissors') || 
    (playerSelection == 'scissors' && computerSelection == 'rock')){
        console.log(computerSelection + 'beats' + playerSelection + '. You Lose!')
    }
    else if (playerSelection == computerSelection){
        console.log(playerSelection + 'and' + computerSelection + '. Draw!')
    }
    else{
        console.log('ERROR')
    }
}

function game(){
    for (let i =0; i<5; i++){
        let playerSelection = window.prompt("Your choice")
        playRound(playerSelection, getComputerChoice)
    }
}
game()