const { add } = require('./code');

describe('String Calculator', () => {

    test('Empty string', () => {
        expect(add("")).toBe(0);
    });
    
});