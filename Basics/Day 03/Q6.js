const func = (username, age = 25, country = "Unknown") => ({ username, age, country });

console.log(`Creating user(Yash, 21, ~) = ${func("Yash", 21)}`);