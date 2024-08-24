function isFibonacciNumber(n) {
    let a = 0, b = 1, pos = 1;

    while (b < n) {
        let temp = b;
        b = a + b;
        a = temp;
        pos++;
    }

    if (b === n) {
        return pos;
    } else {
        return -1;
    }
}

// Example usage
const number = 21;
const position = isFibonacciNumber(number);

if (position !== -1) {
    console.log(${number} is the ${position}th Fibonacci number.);
} else {
    console.log(${number} is not a Fibonacci number.);
}