/* Создать объект human со следующими возможностями:
1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года */

const human = Object.create({
    set fullName(fullName) {
        this.firstName = fullName.split(' ')[0];
        this.lastName = fullName.split(' ')[1];
    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set dateOfBirth(date) {
        this.date = date;
        this.age = new Date().getFullYear() - new Date(this.date).getFullYear();
    },
    get dateOfBirth() {
        return this.date;
    }
});


 human.fullName = 'Pavel Kunof';
 human.dateOfBirth = '1996, 5, 11';

console.log(human);
console.log( human.fullName);
console.log( human.dateOfBirth);