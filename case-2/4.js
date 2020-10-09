/* Реализовать функцию для фильтрации массива чисел по убыванию
const numbers = [-20, -10, 0, 10, 20, 30]

sortDesc(numbers) // [30, 20, 10, 0, -10, -20] */

const numbers = [-20, -10, 0, 10, 20, 30];

const sortDesc = (array) => array.sort((a, b) => b - a);

console.log(sortDesc(numbers));