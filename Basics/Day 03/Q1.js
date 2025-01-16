const func = (price, discount = 10) => price * (100 - discount) / 100;

console.log(`Apply 10% on ₹1500 = ${func(1500)}`);