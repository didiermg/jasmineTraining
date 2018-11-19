const functions = require('../mathFunctions');

describe('La division de 2 numeros', () => {
    it("Division de los numeros 12 y 6.", () => {
        expect(functions.div(12, 6)).toBe(2);
    });

    it('Division de los numeros 32 y 8', () => {        
        expect(functions.div(32, 8)).toBe(4);
    });
});