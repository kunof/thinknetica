/* Реализовать функцию для фильтрации массива по длине слов,
значения длины указываются включительно, фильтр должен работать так:
    const fruits = [‘orange’, ‘apple’, ‘banana’, ‘’]

filterByLength(fruits, 0,5) // [‘apple’, ‘’] */

const fruits = ['orange', 'apple', 'banana', ''];

const filterByLength = function(array, min, max) {
    return array.filter((item) => item.length >= min && item.length <= max)
};

console.log(filterByLength(fruits, 0, 5));