const functions = require('../mathFunctions');

describe('La resta de 2 numeros', () => {
    var num1;
    var num2;
    beforeAll(( ) => {
        num1 = 3;
        num2 = 5;
        console.log('Test Resta');
    });

    it("Resta de los numeros 3 y 5.", () => {
        expect(functions.resta(num1, num2)).toBe(-2);
    });

    it('Resta de los numeros 5 y 3', () => {        
        expect(functions.resta(num2, num1)).toBe(2);
    });
    
});