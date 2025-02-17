const sum = require('./sum');
describe('All Test', () => {
    test('1 + 7 = 8', () => {
        expect(sum(1, 7)).toBe(8);
    });
    test('-1 + -7 = -8', () => {
        expect(sum(-1, -7)).toBe(-8);
    });
    test('2 + 2 != 5', () => {
        expect(sum(2, 2)).not.toBe(5);
    });
    test('{ name: "Yash"} = { name: "" }', () => {
        expect({ name: "Yash" }).toEqual({ name: "Yash" });
    })
});