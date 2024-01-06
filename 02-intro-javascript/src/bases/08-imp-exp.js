import heroes, {owners} from '../data/heroes';

//console.log(heroes);


export const getHeroById = (id) => heroes.find((h) => h.id === id);
export const getHeroesByOwner = (owner) => heroes.filter((h) => h.owner === owner);
export const getOwners = owners;



// console.log(getHeroById(2));
// console.log(getHeroById(1));


//const dcHeros = getHeroesByOwner('DC');

// console.log(dcHeros);

// console.log(owners);