/*Организовать такую цепочку прототипов,
в которой свойства и методы оптимально распределены по объектам:

Есть следующее расширение объектов:
Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник
*/

const Men = {
    name: "John",
    lastName: "Smith",
    location: "Russia",
    phoneNumber: "+1234567890",
    eat: function () {},
    sleep: function () {},
    callFriend: function () {}
};

const Worker = Object.create(Men);
Worker.position = "Senior engineer";
Worker.startDate = "10.10.1990";
Worker.baseSalary = "10000";
Worker.salaryCurrency = "$";
Worker.department = "IT";

const CurrentEmployee = Object.create(Worker);
CurrentEmployee.startVacation = function () {};
CurrentEmployee.writeReport = function () {};
CurrentEmployee.organizeMeeting = function () {};
CurrentEmployee.retire = function () {};

const FormerEmployee = Object.create(Worker);
FormerEmployee.endDate = "10.10.2000";