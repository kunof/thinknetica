/*  Реализовать функцию для сравнения двух массивов,
 сравнение должно попарно сравнивать каждый элемент */

const array1 = [1, 2, 5, 6, 1, 15];
const array2 = [1, 2, 7, 2, 1];

const compare = function (a1, a2) {
    a1.forEach((item, i) => {
        if (a2[i] && item === a2[i]) {
            console.log(`Coincidence index [${i}]`)
        }
    });
};

compare(array1, array2);