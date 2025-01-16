const func = (a, b) => [ ...a, ...b ];

console.log(`Merging ${[1, 5, 7]} and ${[2, 8, 10]} = ${func([1, 5, 7], [2, 8, 10])}`);