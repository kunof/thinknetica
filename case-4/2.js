/*С помощью прототипа реализовать структуру "Квадрат"
 которая будет расширять структуру "Прямоугольник",
  должна быть возможность задавать размеры
  обеим фигурам и получать их площадь и периметр*/


const rectangle = {};

rectangle.__proto__.setSize = function (a, b) {
    this.width = a;
    this.height = b;
};

rectangle.__proto__.getArea = function () {
    return this.width * this.height;
};

rectangle.__proto__.getPerimeter = function () {
    return (this.width + this.height) * 2;
};

const square = {};
square.__proto__ = rectangle;
square.__proto__.setSize = function (a) {
    this.width = a;
    this.height = a;
};

square.setSize(10);

console.log(square.getArea());
console.log(square.getPerimeter());