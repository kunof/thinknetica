// Копилка

const MoneyBox = function() {
    let acc = 0;

    this.addCoin  = function() {
        acc++;
    };

    this.getAmount = function () {
        console.log(acc);
    };
};

const box = new MoneyBox();

box.getAmount(); // 0
box.addCoin();
box.addCoin();
box.getAmount(); // 2
