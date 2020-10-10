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

const getFullNames = (objectsList) => objectsList.map((item) => `${item.firstName } ${item.lastName}`).join(', ');

// 1. Узнать среднюю зарплату сотрудников
const getAverageSalary = (staff) => staff.reduce((acc, item) => acc + item.salary, 0) / staff.length;

console.log(`1. Средняя зарплата сотрудников: ${getAverageSalary(employees)}`);

// 2. Отсортировать сотрудников по зарплате
const sortBySalary = (staff) =>staff.sort((a , b) => a.salary - b.salary);

console.log(`2. Сортировка сотрудников по зарплате: ${getFullNames(sortBySalary(employees))}`);

// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет
const filter = (staff) => staff.filter((item) => {return item.salary > 4500 && item.age > 25});

console.log(`3. Сотрудники с зарплатой >4500 и возрастом > 25 лет: 
${getFullNames(filter(employees))}`);
