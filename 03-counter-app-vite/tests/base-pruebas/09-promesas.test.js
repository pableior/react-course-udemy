import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebbas en 09-promesas', () => { 
    
    

    test('getHeroByIdSync debbe retornar un heroe', (done) => { 
        
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });

     });


     test('getHeroByIdSync debbe obtnener error si  un heroe no existe', (done) => { 
        
        const id = 100;
        getHeroeByIdAsync(id)
        .then( hero => {
            expect(hero).toBeFalsy();
            done();
        })
        .catch(error => {
            expect(error).toBe("No se pudo encontrar el héroe");
            done();
        })

     });


});