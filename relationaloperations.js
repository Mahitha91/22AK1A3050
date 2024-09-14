const demonstrateRelationalOperations = (num, pos1, pos2) => {
    const [digit1, digit2] = [num.toString()[pos1], num.toString()[pos2]].map(Number);

    console.log(Digit 1: ${digit1}, Digit 2: ${digit2});

    console.log(${digit1} == ${digit2}: ${digit1 == digit2});
    console.log(${digit1} != ${digit2}: ${digit1 != digit2});
    console.log(${digit1} > ${digit2}: ${digit1 > digit2});
    console.log(${digit1} < ${digit2}: ${digit1 < digit2});
    console.log(${digit1} >= ${digit2}: ${digit1 >= digit2});
    console.log(${digit1} <= ${digit2}: ${digit1 <= digit2});
};
const number = 1234567890;
demonstrateRelationalOperations(number, 2, 7);
