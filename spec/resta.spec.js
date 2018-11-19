const functions = require('../mathFunctions');

describe('La resta de 2 numeros', () => {
    beforeAll(( ) => {
        console.log('Test Resta');
    });

    it("Resta de los numeros 3 y 5.", () => {
        expect(functions.resta(3, 5)).toBe(-2);
    });

    it('Resta de los numeros 5 y 3', () => {        
        expect(functions.resta(5, 3)).toBe(2);
    });
    
});