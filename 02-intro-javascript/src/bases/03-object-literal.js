const person = {
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    }
};

// console.log(person.name);
// console.log(person);
// console.log({person:person});
// console.log({person});

//  console.table(person);

//console.log({person});


const person2 = person; // copia la referencia, implica que si se cambia persona2 cambbia persaona
person2.name = 'Peter';
console.log({person});
console.log({person2:person});


// una opcion es crear un nuevo objeto con todo de nuevo y esto no vale la pena!!


// utilizar spread para clonar
person2.name = 'Tony';
const person3 = {...person};
person3.name = 'Pablito';

console.log(person);
console.log({person3:person3});



