const delayTime = 3000;

let secondsLeft = Math.ceil(delayTime / 1000);

const progressInterval = setInterval(() => {
    console.log(`Generating random number in ${secondsLeft} seconds...`);
    secondsLeft--;

    if (secondsLeft < 0) {
        clearInterval(progressInterval);

        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100

            console.log(`Random Number Generated: ${randomNumber}`);
        }, 0);
    }
}, 1000); 
