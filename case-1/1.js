// Ф-я подсчёта букв в слове

function countOfLetters(string) {
    if (typeof string === 'string') {
        return string.length
    }
}

console.log(countOfLetters('Hello'));