const func = (msg = "This is a default message!", ...names) => names.map((name) => `Hey ${name}, ${msg}`).join("\n");

console.log(`Welcoming people\n${func("Hemlo!", "Yash", "Prashant", "Dogesh")}`);