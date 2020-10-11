const cache = function() {
    const cacheStorage = {};

    return function (first, second) {
        const cacheResult = cacheStorage[`${first}&${second}`];

        if (cacheResult) {  
            return {value: cacheResult, fromCache: true}
        } else {
            const value = first ** second;
            cacheStorage[`${first}&${second}`] = value;

            return {value: value, fromCache: false}
        }
    }
};

const calculate = cache();

console.log(calculate(3, 3)); // { value: 27, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}