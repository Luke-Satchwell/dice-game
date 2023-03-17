// non refactored code to generate random dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1
console.log(randomNumber1)
let randomDiceImage = 'dice' + randomNumber1 + '.png'
let randomImageSource = 'images/' + randomDiceImage
let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomImageSource)

// refactored code for dice 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1
let randomDiceImageSource2 = 'images/dice' + randomNumber2 + '.png'
document.querySelectorAll('img')[1].setAttribute('src', randomDiceImageSource2)

// change h1 inner html to declare winner
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 1 Wins'
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins'
} else {
  document.querySelector('h1').innerHTML = 'Draw!'
}
