function classifyNumber(n) {
    if (n <= 0) {
        console.log("Input must be a positive integer.");
        return;
    }
    function sumOfDivisors(num) {
        let sum = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                sum += i;
                if (i !== 1 && i !== num / i) {
                    sum += num / i;
                }
            }
        }
        return sum;
    }
    let sum = sumOfDivisors(n);
    if (sum > n) {
        console.log(n + " is an Abundant Number.");
    } else if (sum === n) {
        console.log(n + " is a Perfect Number.");
    } else {
        console.log(n + " is a Deficient Number.");
    }
}
const number = 28; 
classifyNumber(number);