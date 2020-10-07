// Ф-я реверсии слова

function stringReverse(string) {
    if (typeof string === 'string') {
        let reversedString = '';
        for (let i = string.length - 1; i >= 0; i--) {
            reversedString += string[i];
        }
        return reversedString;
    }
}

console.log(stringReverse('Hello dude'));
