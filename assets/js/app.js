let number = Math.random();
number = number * 100;

let fixedNumber = Math.trunc(number);
console.log(fixedNumber);

function guessing() {   
    if (fixedNumber > numberGuess) {
        answer.innerHTML = `My number is bigger than ${numberGuess}`;
    } else if (fixedNumber < numberGuess) {
        answer.innerHTML = `My number is lower than ${numberGuess}`;
    } else {
        answer.innerHTML = `You're win!`;
    }

    if (i === tries) {
        answer.innerHTML = `Sorry, you've used all your tries. The correct number was ${fixedNumber}.`;
    }

}
