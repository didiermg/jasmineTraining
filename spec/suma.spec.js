const functions = require('../mathFunctions');

describe('La suma de 2 numeros', () => {
    it("Suma de los numeros 2 y 6.", () => {
        expect(functions.suma(2, 6)).toBe(8);
    });

    it('Suma de los numeros 5 y 8', () => {        
        expect(functions.suma(5, 8)).toBe(13);
    });

    afterAll( () => {
        console.log('SUMA PROBADA!!!');
    });
});