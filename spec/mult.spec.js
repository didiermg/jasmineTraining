const functions = require('../mathFunctions');

describe('La multiplicacion de 2 numeros', () => {
    beforeEach( () => {
        console.log('Test Multiplicacion');
    });

    it("Multiplicacion de los numeros 3 y 5.", () => {
        expect(functions.mult(3, 5)).toBe(15);
    });

    it('Multiplicacion de los numeros 5 y 3', () => {        
        expect(functions.mult(5, 3)).toBe(15);
    });
});