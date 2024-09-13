function reverseWordsInString(str) {
    const wordsArray = str.split(" ");
    const reversedWordsArray = wordsArray.map(word => {
        return word.split("").reverse().join("");
    });
    const reversedString = reversedWordsArray.join(" ");

    return reversedString;
}
const inputString = "my name is raja";
const result = reverseWordsInString(inputString);
console.log(result); 