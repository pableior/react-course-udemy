import heroes, {owners} from '../data/heroes';

console.log(heroes);


const getHeroById = (id) => heroes.find((h) => h.id === id);
console.log(getHeroById(2));
console.log(getHeroById(1));

const getHeroesByOwner = (owner) => heroes.filter((h) => h.owner === owner);

const dcHeros = getHeroesByOwner('DC');

console.log(dcHeros);

console.log(owners);