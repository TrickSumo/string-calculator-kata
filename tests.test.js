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

    test('Multiple negative numbers will throw an exception', () => {
        expect(() => add("//$\n1$2,-3,-4,-5")).toThrow('negative numbers not allowed -3,-4,-5');
    });

    test('Numbers bigger than 1000 should be ignored', () => {
        expect(add("//#\n1011#2,4")).toBe(6);
    });

    test('Delimiters can be of any length - A', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    test('Delimiters can be of any length - B', () => {
        expect(add("//[####]\n1####2,3")).toBe(6);
    });

    test('Delimiters can be of any length - C', () => {
        expect(add("//[%]\n1%2%3")).toBe(6);
    });

    test('Multiple delimiters - A', () => {
        expect(add("//[*][%]\n1*4%4")).toBe(9);
    });

    test('Multiple delimiters - B', () => {
        expect(add("//[*][%]\n1*2,3")).toBe(6);
    });

    test('Multiple delimiters - C', () => {
        expect(add("//[*][#][%]\n4*2#3%6")).toBe(15);
    });

    test('Multiple delimiters with length longer than one char - A', () => {
        expect(add("//[*][%%%]\n1*2%%%3")).toBe(6);
    });

    test('Multiple delimiters with length longer than one char - B', () => {
        expect(add("//[****][######]\n1****2######3,9")).toBe(15);
    });

    test('Multiple delimiters with length longer than one char - C', () => {
        expect(add("//[&&&][%%%%]\n1&&&2%%%%3,4,5")).toBe(15);
    });

    test('One More Test!', () => {
        expect(add("//[&][%%%%][\n]\n1&2%%%%3,4,5\n6")).toBe(21);
    });
});