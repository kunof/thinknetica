// Касса

const Ticket = function () {
    let cash = 0;
    const events = [];
    const tickets = [];

    function random() {
        let rand = 0.5 + Math.random() * 9;
        return Math.round(rand);
    }

    const generateId = function () {
        let length = 6;
        const id = new Array(length)
            .fill('')
            .map(() => random().toString())
            .join('');

        return tickets.includes(id) ? generateId() : id;
    };

    this.createEvent = function (name, cost) {
        events.push({id: events.length, name: name, cost: cost})
    };

    this.buyTicket = function (name) {
        const event = events.find((item) => item.name === name);
        const ticketId = generateId();

        tickets.push({ticketId: ticketId, eventId: event.id, cost: event.cost});
        cash += event.cost;

        return ticketId;
    };

    this.returnTicket = function (ticket) {
        const ticketObj = tickets.find((item) => item.ticketId === ticket);
        if (ticketObj) {
            tickets.forEach((item, index) => {
                if (item === ticketObj) {
                    delete tickets[index];
                    cash -= ticketObj.cost;
                }
            });
        }
    }
};

const ticketWindow = new Ticket();
ticketWindow.createEvent('Concert', 500); // создаем концерт и указываем цену билетов

const ticket = ticketWindow.buyTicket('Concert');
console.log(ticket); /* Добавляем сумму за билет в кассу, возвращаем
случайный шестизначный ID билета, создать ID можно любым способом */

ticketWindow.returnTicket(ticket); /* Возвращаем билет, если в системе такой id записан
как проданный, он должен быть удален из списка проданных и из кассы должна быть
вычтена соответствующая его цене сумма */