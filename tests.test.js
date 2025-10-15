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

    test('Handle new lines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('Support different delimiters - A', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('Support different delimiters - B', () => {
        expect(add("//B\n1B2,6")).toBe(9);
    });

    test('Support different delimiters - C', () => {
        expect(add("//#\n1#2")).toBe(3);
    });

    test('Negative number will throw an exception', () => {
        expect(() => add("//$\n1$2,-3")).toThrow('negative numbers not allowed -3');
    });
});