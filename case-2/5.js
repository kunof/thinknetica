/* Есть массив сотрудников компании
Нужно выполнить с ним следующие преобразования:
1. Узнать среднюю зарплату сотрудников
2. Отсортировать сотрудников по зарплате
3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет */

const employees = [
    {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 54,
        salary: 10000,
        position: 'Architect'
    },
    {
        firstName: 'Gustav',
        lastName: 'Andersen',
        age: 31,
        salary: 5000,
        position: 'Software engineer'
    },
    {
        firstName: 'Liz',
        lastName: 'Taylor',
        age: 20,
        salary: 7000,
        position: 'Manager'
    }
];

const getFullNames = function(objectsList) {
    return objectsList.map((item) =>
        `${item.firstName } ${item.lastName}`)
        .join(', ');
};

// 1. Узнать среднюю зарплату сотрудников
const getAverageSalary = function(staff) {
    return staff.reduce((acc, item) => {
            return acc + item.salary
        }, 0) / staff.length
};

console.log(`1. Средняя зарплата сотрудников: ${getAverageSalary(employees)}`);

// 2. Отсортировать сотрудников по зарплате
const sortBySalary = function (staff) {
    return staff.sort((a , b) => a.salary > b.salary ? 1 : -1)
};

console.log(`2. Сортировка сотрудников по зарплате: ${getFullNames(sortBySalary(employees))}`);

// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет
const filter = function (staff) {
    return staff.filter((item) => {return item.salary > 4500 && item.age > 25})
};

console.log(`3. Сотрудники с зарплатой >4500 и возрастом > 25 лет: 
${getFullNames(filter(employees))}`);
