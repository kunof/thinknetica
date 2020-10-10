// Калькулятор

const Calc = function () {
    let operations = [
        {operator: '+', func: (a, b) => a + b},
        {operator: '*', func: (a, b) => a * b}
    ];

    const history = [];

    const stringToObject = function (string) {
        let operator = false;
        let numbers = string.split(' ');

        operations.forEach((operation) => {
            if (string.indexOf(operation.operator) >= 0) {
                operator = operation.operator
            }
        });

        numbers = numbers.filter((item) => {
            return Number(item)
        });

        return operator ? {numbers: numbers, operator: operator} : false;
    };

    const historyAdd = function (obj) {
        history.push(obj);
    };

    this.operation = function (string) {
        const data = stringToObject(string);

        if (data) {
            const func = operations.find((item => item.operator === data.operator)).func;
            const result = func(parseInt(data.numbers[0]), parseInt(data.numbers[1]));
            historyAdd({operation: data.operator, numbers: data.numbers});
            return result;
        }

        return false;
    };

    this.addOperation = function (operator, func) {
        operations.push({operator: operator, func: func});
    };

    this.removeOperation = function (operator) {
        operations = operations.filter((item) => item.operator !== operator);
    };

    this.history = function () {
        return history;
    };

    this.clearHistory = function () {
        history.splice(0, history.length);
    }
};

const calculator = new Calc();

console.log(calculator.operation('31 + 32')); // 63
console.log(calculator.operation('10 * 2')); // 20
calculator.addOperation('/', (a, b) => a / b);
console.log(calculator.operation('10 / 2')); // 5

calculator.removeOperation('/');

console.log(calculator.operation('10 / 2')); // 5

console.log(calculator.history()); /* [{operation: '+', operands: [31,32]}, {operation: '*',
operands: [10,2]}, {operation: '/', operands: [10,2]}] */

calculator.clearHistory();
console.log(calculator.history()); // []