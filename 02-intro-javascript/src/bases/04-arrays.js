// Arrays js.

// const array = new Array(); // empty array

//const array = new Array(100); // array con tamanio 100, pero no queda fixxeado a ese tamanio.
//

// conviene inicializr con []
//const array = [];
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4); 
// no conviene usar push, sino el spread.

//definiendo e inicializando
const array = [1, 2, 3, 4];
// let array2 = array;
// array2.push(5);

// si se intenta crea el array 2 con el 5 de la siguiente forma el array va a tener dos 
// elementos, el primer array y el 5
const array2 = [array, 5];
console.log(array);
console.log(array2);


//ejercicio, crear un array3 que tenga los mismos elementos que array y el 5.

const array3 = [...array, 5];

console.log(array);
console.log(array3);

//map.

const array4 = array3.map( function(number) {
    return number * 2;
});

console.log(array4);