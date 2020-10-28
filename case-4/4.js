const errorList = [
    'Вы ошиблись верфью. Забирайте свой корабль обратно',
    'Невозможно построить корабль по заданным опциям. Вероятно, вы ошиблись верфью',
];

// Ship options
const sailShipOptions = {
    mastsCount: 1,
    sailArea: 20,
    color: 'white'
};

const engineShipOptions = {
    enginePower: 140,
    material: 'Carbon fiber',
    color: 'black'
};

const newEngineShipOptions = {
    enginePower: 340,
    material: 'Wood',
    color: 'purple'
};

// Constructors
class Shipyard {
    checkType(ship) {
        return ship.type === this.type
    }

    build(options) {
        if (this['checkOptions'](options)) {
            return {...options, type: this.type, manufactureDate: new Date()}
        }

        console.log(errorList[1]);
    };

    repairs(ship) {
        if (this.checkType(ship)) {
            ship.lastReparirsDate = new Date();
            ship.reparirsCount = ship.reparirsCount ? 1 : ship.reparirsCount++;
        } else {
            console.log('Ремонт | ', errorList[0]);
        }
        return ship;
    };

    repaint(ship, color) {
        ship.color = color;

        return ship;
    };

    exchange(ship, options) {
        if (this.checkType(ship) && this['checkOptions'](options)) {
            return this.build(options);
        }

        console.log('Обмен | ',errorList[0]);
        return ship;
    };
}

class SailShipyard extends Shipyard {
    constructor() {
        super();
        this.type = 'sail';
    }

    checkOptions(options) {
        return options.mastsCount && options.sailArea
    }
}

class EngineShipyard extends Shipyard {
    constructor() {
        super();
        this.type = 'engine';
    }

    checkOptions(options) {
        return options.material && options.enginePower;
    }
}

// Use

const sailShipyard = new SailShipyard();
const engineShipyard = new EngineShipyard();

const sailShip = sailShipyard.build(sailShipOptions);
const engineShip = engineShipyard.build(engineShipOptions);

// Мне не нравится что приходится в данном случае использовать присвоение. Но не наю как тут можно иначе
// Такими темпами можно и без корабля остаться если не знаешь что за механики в этой верфи ;)
const resultRepairsEngineShip = engineShipyard.repairs(engineShip); // Ремонтируем в подходящей верфи
const resultRepairsSailShip = engineShipyard.repairs(sailShip); // Ремонтируем в неподходящей верфи, получаем корабль в том же виде что и отдали

//Перекрашивание в любой верфи
const resultRepaintSailShip = engineShipyard.repaint(sailShip, 'red');

//Обмен корабля на новый
const  resultExchangeEngineShip = engineShipyard.exchange(engineShip, newEngineShipOptions);