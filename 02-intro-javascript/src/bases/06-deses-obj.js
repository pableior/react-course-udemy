// Desestructuracion
// asignacion desestructurante

const person = {
    firstName : 'Tony',
    age : 45,
    code: 'Ironman',
    range: 'soldier',
};


const  {firstName, age, code} = person;
console.log(person.firstName);
console.log(person.age);
console.log(person.code);


console.log(firstName);
console.log(age);
console.log(code);

// usando desestructuracion en el body
const returnPerson1 = (user) => {
    console.log('returnPerson1');
    const {age, firstName, code} = user;
    console.log(age, firstName, code);
    console.log('================================');
}


// usando desestructuracion en el argumento
const returnPerson2 = ({firstName, age}) => {
    console.log('returnPerson2');
    console.log(age, firstName);
    console.log('================================');
}

// usando desestructuracion en el argumento y default value
const returnPerson3 = ({firstName, age, range = 'captain'}) => {
    console.log('returnPerson2');
    console.log(age, firstName, range);
    console.log('================================');
}

const _useContext = ({code, firstName, age, rage = 'Captain'}) => {
    return {keyname: code,  yearsold: age,
    latlng: {
        lat: 124154,
        lng: 5454,
    }}
}

returnPerson1(person);
returnPerson2(person);
returnPerson3(person);


// retrieve the object lat lang
const {keyname, yearsold, latlng} = _useContext(person);
console.log(keyname, yearsold, latlng);

//retrieve attributes of latlng
// otra forma mas normal es desdestructurar latlng
const {keyname:k2, yearsold:y2, latlng:{lat, lng}} = _useContext(person);
console.log(keyname, yearsold, lat, lng);

