const { add } = require('./code');

describe('String Calculator AddKata', () => {

    test('Empty string', () => {
        expect(add("")).toBe(0);
    });

    test('Single number', () => {
        expect(add("5")).toBe(5);
    });
    
});