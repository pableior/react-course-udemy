import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebabs en 11-async-wat', () => { 

    test('should return url image', async() => { 
        const url = await getImagen();
        expect(typeof url).toBe('string');
    })


})