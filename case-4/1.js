/*Модифицировать прототип Array,
добавив в него метод shuffle,
чтобы получить возможность выполнять
случайную сортировку для любого массива*/

const array = [0, 1, 5, 'Name', 12];

Array.prototype.shuffle = function () {
    return this.sort(() => Math.floor(Math.random() * 2))
};

console.log(array.shuffle());