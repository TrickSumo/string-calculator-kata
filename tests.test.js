const { add } = require('./code');

describe('String Calculator AddKata', () => {

    test('Empty string', () => {
        expect(add("")).toBe(0);
    });

    test('Single number', () => {
        expect(add("5")).toBe(5);
    });

    test('Add two numbers', () => {
        expect(add("1,5")).toBe(6);
    });

    test('Add multiple numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });

    test(' handle new lines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });
});