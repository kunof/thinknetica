/* Реализовать функцию, которая принимает текст,
и возвращает массив объектов со структурой
{ word: 'smth', length: 1, isCapitalized: false} */

function stringToStrangeObject(string) {
    const arr = [];
    string.split(' ').forEach(word => {
        arr.push(
            {
                word: word,
                length: word.length,
                isCapitalized: word.charAt(0).toUpperCase() === word.charAt(0)
            }
        );
    });

    return arr;
}

const string = 'Lorem ipsum dolor sit amet consectetur ue nec metus maximus';
console.log(stringToStrangeObject(string));