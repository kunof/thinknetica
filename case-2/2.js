/*  Реализовать функцию для сравнения двух массивов,
 сравнение должно попарно сравнивать каждый элемент */

const array1 = [1, 2, 5, 6, 1, 15];
const array2 = [1, 2, 5, 6, 1, 15];

const compare = function (a1, a2) {
    const a = a1.reduce((acc, item, index) => {
        acc += a2[index] && item === a2[index] ? 1 : 0;
        return acc;
    }, 0);

    return (a1.length + a2.length) / 2 === a;
};

console.log(compare(array1, array2) ? 'Массивы схожи' : 'Массивы различаются');