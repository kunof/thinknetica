/*Организовать такую цепочку прототипов,
в которой свойства и методы оптимально распределены по объектам:

Есть следующее расширение объектов:
Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник
*/

const john = {
    name: "John",
    lastName: "Smith",
    position: "Senior engineer",
    startDate: "10.10.1990",
    endDate: "10.10.2000",
    baseSalary: "10000",
    salaryCurrency: "$",
    location: "Russia",
    department: "IT",
    phoneNumber: "+1234567890",
    eat: function() {},
    sleep: function() {},
    callFriend: function() {},
    writeReport: function() {},
    organizeMeeting: function () {},
    retire: function () {},
    startVacation: function () {}
};

const Men = function(props) {
    this.name = props.name;
    this.lastName = props.lastName;
};

Men.__proto__.eat = function () {};
Men.__proto__.sleep = function () {};
Men.__proto__.callFriend = function () {};

const Worker = function() {};

Worker.__proto__ = Men(john);
Worker.__proto__.writeReport = function () {};
Worker.__proto__.organizeMeeting = function () {};
Worker.__proto__.retire = function () {};
Worker.__proto__.startVacation = function () {};

const frontEnder = new Worker(john);