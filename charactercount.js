function countCharacterOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (let char in charCount) {
        console.log(${char} repeated ${charCount[char]} time(s));
    }
}
const inputString = "raja";
countCharacterOccurrences(inputString);