const functions = require('../mathFunctions');

describe('La multiplicacion de 2 numeros', () => {
    var num1;
    var num2;
    beforeEach( () => {       
        num1 = 3;
        num2 = 5;
        console.log('Test Multiplicacion');
    });

    it("Multiplicacion de los numeros 3 y 5.", () => {
        expect(functions.mult(num1, num2)).toBe(15);
    });

    it('Multiplicacion de los numeros 5 y 3', () => {        
        expect(functions.mult(num2, num1)).toBe(15);
    });
});