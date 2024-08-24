function calculateLuckyNumber(dob) {
    let sum = dob.replace(/-/g, '')
                .split('')
                .reduce((acc, digit) => acc + parseInt(digit), 0);
    while (sum > 9) {
        sum = sum.toString().split('')
                   .reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
}
let dob = "09-01-2005";
let luckyNumber = calculateLuckyNumber(dob);
console.log("Your lucky number is: " + luckyNumber);