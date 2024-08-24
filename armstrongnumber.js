function isArmstrongNumber(num) {
    let numStr = num.toString();
    let numDigits = numStr.length;
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(parseInt(numStr[i]), numDigits);
    }
    return sum === num;
}
let number = 153;
if (isArmstrongNumber(number)) {
    console.log(number + " is an Armstrong number.");
} else {
    console.log(number + " is not an Armstrong number.");
}