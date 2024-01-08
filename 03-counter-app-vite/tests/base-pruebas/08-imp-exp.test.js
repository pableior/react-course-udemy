import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {
    
    
    test('Should return a hero', () => { 
        
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual( {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
     });

     test('Should return undefined if not exists', () => { 
        
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
        // true si es null, undefined o false.
     });


     test('Should return dc heroes', () => {
        const heroes = getHeroesByOwner('DC');
        expect(heroes.length).toBe(3);
        heroes.forEach(h => {
            expect(h.owner).toBe('DC');
        });  
     });

     test('Should return marvel heroes', () => {
      const heroes = getHeroesByOwner('Marvel');

      expect(heroes.length).toBe(2);
      heroes.forEach(h => {
          expect(h.owner).toBe('Marvel');
      });  

   });
});