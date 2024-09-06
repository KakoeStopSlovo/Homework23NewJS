let number = Math.random();
number = number * 100;
let fixedNumber = Math.trunc(number);
console.log(fixedNumber);

let tries = 10;

function guessing(){   
    
    let numberGuess = answer.value;
    
    if(isNaN(numberGuess)){
        variant.innerHTML = `Enter a valid number`;
        return;
    }
    
    tries--;
    triesLeft.innerHTML = `Tries Left:${tries}`;
    if (fixedNumber > numberGuess) {
        variant.innerHTML = `My number is bigger than ${numberGuess}`;
    } else if (fixedNumber < numberGuess) {
        variant.innerHTML = `My number is lower than ${numberGuess}`;
    } else {
        variant.innerHTML = `You're win!`;
    }
    
    if (0 === tries) {
        variant.innerHTML = `Sorry, you've used all your tries. The correct number was ${fixedNumber}.`;
        guessButton.disabled = true;
    }

}

