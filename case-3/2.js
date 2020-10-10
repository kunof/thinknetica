const cache = function() {
    const cacheStorage = [];

    return function (first, second) {
        const obj = {f: first, s: second};
        const cacheResult = cacheStorage.find((item) => item.f === obj.f && item.s === obj.s);

        if (cacheResult) {
            return {value: cacheResult.value, fromCache: true}
        } else {
            obj.value = first ** second;
            cacheStorage.push(obj);

            return {value: obj.value, fromCache: false}
        }
    }
};

const calculate = cache();

console.log(calculate(3, 3)); // { value: 27, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}