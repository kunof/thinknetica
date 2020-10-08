/* Создать объект human со следующими возможностями:
1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года */

const human = Object.create({
    fullName: {
        set: function(fullName) {
            this.firstName = fullName.split(' ')[0];
            this.lastName =  fullName.split(' ')[1]
        },
        get: function() {
            return `${this.firstName} ${this.lastName}`
        }
    },
    setDateOfBirth: function(date) {
        /* Не очень понимаю как при задании dateOfBirth должно выполняться что-то ещё
         поэтому создал отдельный метод для установки даты рождения и возраста.
         А создавать сеттер и внутри него опять вызывать присвоение значения - это как то непонятно.
         Поясните этот момент, пожалуйста*/
        this.dateOfBirth = new Date(date);
        this.age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
    }
});

human.fullName = 'Pavel Kunof';
human.setDateOfBirth('1996, 5, 11');

console.log(human);