// Game values
let min = 1,
    max = 10,
    winningNum = getWinningNum(min, max),
    guessesLeft = 3;

//UI elements

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}

// win or lose func
function winLose(win, msg){
    let color;
    console.log(win);
    (win === true) ? color = 'green': color = 'red';
    //disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // set msg and color
    setMessage(`${msg}`);
    message.style.color = color;
    // guessBtn.textContent = 'Try Again';
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}
// play again Listener\
game.addEventListener('mousedown', function (e) {
    if(e.target.className === 'play-again'){
     window.location.reload();
    }
})
// Listen for submit
guessBtn.addEventListener('click', function (e) {
    let guess = parseInt(guessInput.value);

    // validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter number between ${min} and ${max}`, 'red');
    }
    // check if won
    if (guess === winningNum) {
        winLose(true, `${winningNum} is correct!!!`)

    }else {
        // wrong number-> guess minus one
        guessesLeft -= 1;
        
        if (guessesLeft === 0 ){
            winLose(false,`You lost, Game Over. The winning number was: ${winningNum}` )

        }else {
            // user msg to move on and coloring to red
            setMessage(`guess ${guess} was wrong you left ${guessesLeft} guesses`);
            guessInput.style.borderColor = 'red';
            message.style.color = 'red';
            // clear the input
            guessInput.value = '';

        }
    }
})

// Get winning number
function getWinningNum(min, max) {
 return Math.floor(Math.random()*(max-min+1)+min);
}