const buttons = document.querySelectorAll('button')
const results = document.querySelector('.results')

buttons.forEach((button) => [
    button.addEventListener('click', makeChoice)

])


function makeChoice(e) {
    results.textContent = String(e.target.className)
}