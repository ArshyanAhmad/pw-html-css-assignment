const input = 'Hellow World'

setTimeout(() => {
    const reverseString = input.split("").reverse().join("")
    console.log('After 2 secend', reverseString);
}, 2000);
