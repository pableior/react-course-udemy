

const characters = ['Goku', 'Vegeta', 'Trunks'];

//obtiene el primer elemento 
//del array idependiente del nombre
const [e1] = characters;

console.log(e1);

// Pero como hacemos para obtener otro
// indice del array?
// dejamos vacios los indices,
// y separamos por ','
// por ejemplo tercer elmeento

const[,,e3] = characters;
console.log(e3);


const returnArray = () => {
    return ['ABC', 123];
}

const [letter, numbers] = returnArray();

console.log(letter, numbers);


//task
// first value of the arrab name
// secundo setnombre
const _useState = (value) => {
    return [value, ()=> console.log('Hola Mundo')];
}

const arr = _useState('Goku');
console.log(arr);


const[_name, setName] = _useState('Goku');

console.log(_name);
setName(); // lo mimso que llamar a arr[1](); 