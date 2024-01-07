import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objecto', () => {
    
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toStrictEqual(user);
    
    });

    test('getUsuarioActivo debe retornar un objeto', () => { 
        const name = 'Pablo';
        const testUserActivo = {
            uid: 'ABC567',
            username: name
        };
        const userActivo = getUsuarioActivo(name);
        expect(testUserActivo).toEqual(userActivo);
    });


});

