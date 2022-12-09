const buttons = document.querySelectorAll('button')
const results = document.querySelector('.results')
const computer_choices = ['rock', 'paper', 'scissors']

const player_score = document.querySelector('.player_score')
const computer_score = document.querySelector('.computer_score')

function playRound(e){
    player_play = String(e.target.className)
    computer_play = computer_choices[Math.floor(Math.random() * computer_choices.length)]
    resuls = ''

    if (player_play == computer_play){
        result = 'its a draw'
    }
    else{
        if (player_play == 'paper' && computer_play == 'rock' || 
            player_play == 'scissors' && computer_play == 'paper' || 
            player_play == 'rock' && computer_play == 'scissors'){

                player_score.textContent = parseInt(player_score.textContent) +1
                result = 'you win'
            }
        

        if (player_play == 'paper' && computer_play == 'scissors' ||
            player_play == 'scissors' && computer_play == 'rock' || 
            player_play == 'rock' && computer_play == 'paper'){

                computer_score.textContent = parseInt(computer_score.textContent) +1
                result = 'you lose'
            }
    }
    displayResult(player_play,computer_play,result)
}

buttons.forEach((button) => [
    button.addEventListener('click', playRound)
])

function displayResult(player_play,computer_play,result){
    let statement = `You played ${player_play}, computer played ${computer_play}, ${result}!`
    results.textContent = statement
}