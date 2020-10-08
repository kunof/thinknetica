/* Реализовать функцию для случайной сортировки элементов массива */

const someArray = [1, 'Pen', 'Apple', 1000, '...морских звёзд'];

const sortRandomly = function () {
    return someArray.sort(() => Math.floor(Math.random() * 2) === 0 ? 1 : -1)
};

console.log(sortRandomly(someArray));