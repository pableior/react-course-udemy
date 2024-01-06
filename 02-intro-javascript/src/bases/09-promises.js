import { getHeroById } from "../bases/08-imp-exp";

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // task importar gethero by id 
//         const heroe = getHeroById(2);
//         console.log(heroe);
//         //resolve(heroe);
//         //reject('no se pudo encontrar el heroe');
//        }, 2000);
// });

// promise.then((heroe) => {
//     console.log('Then of the promise')
// })
// .catch(err => console.warn(err))


const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if (hero === undefined) {
                reject(`hero ${id} not found`);
            } else {
                resolve(hero);
            }
        }, 2000)
    })
}

getHeroByIdAsync(2).then((hero) => console.log('Hero: ', hero))
.catch((err) => console.warn(err));

getHeroByIdAsync(2).then(console.log)
.catch(console.warn);
