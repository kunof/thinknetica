/*Организовать такую цепочку прототипов,
в которой свойства и методы оптимально распределены по объектам:

Есть следующее расширение объектов:
Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник
*/
class Men {
    constructor(data) {
        this.name = data.name;
        this.lastName = data.lastName;
        this.location = data.location;
        this.phoneNumber = data.phoneNumber;
    }

    eat() {};
    sleep() {};
    callFriend() {};
}

class Worker extends Men {
    constructor(data) {
        super(data);
        this.position = data.position;
        this.startDate = data.startDate;
        this.baseSalary = data.baseSalary;
        this.salaryCurrency = data.salaryCurrency;
        this.department = data.department;
    }
}

class CurrentEmployee extends Worker {
    constructor(data) {
        super(data);
    }

    startVacation() {};
    writeReport() {};
    organizeMeeting() {};
    retire() {};
}

class FormerEmployee extends Worker {
    constructor(data) {
        super(data);
        this.endDate = data.endDate;
    }
}

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
};

const instance = new CurrentEmployee(john);