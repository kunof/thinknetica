//// Циклы
let range = {
    from: 1,
    to: 20
};

// 1
let i = range.from;
do
{
    if (i % 2 === 0) {
        console.log(i);
    }

    i++;
} while (i <= range.to);

// 2
let j = range.from;
while(j <= range.to) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++
}

// 3
for (let i = range.from; i <= range.to; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}