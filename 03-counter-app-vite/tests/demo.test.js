
describe('Pruebas en <democomponent />', () => {
    test('Esta prueba no debe de fallar', () => {

        // 1. inicializacion
        const msg1 = 'Hola Mundo';
        
        // 2. estimulo
        const msg2 = msg1.trim();
        
        // 3. assertions (oservar comportamiento esperado)
        expect(msg1).toBe(msg2);
    }); 
});