function interchangeFirstAndLastColumns(matrix) {
    let rows = matrix.length;
    for (let i = 0; i < rows; i++) {
        let temp = matrix[i][0]; 
        matrix[i][0] = matrix[i][matrix[i].length - 1]; 
        matrix[i][matrix[i].length - 1] = temp; 
    }

    return matrix;
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original matrix:");
console.log(matrix);

let updatedMatrix = interchangeFirstAndLastColumns(matrix);

console.log("Matrix after interchanging first and last columns:");
console.log(updatedMatrix);