//functions

const greeting = function (name) {
    return `Hola, ${name}`;
}

// function de flecha
const greeting2 = (name) => {
    return `Hola, ${name}`;
}


// function de flecha
const greeting3 = (name) => `Hola, ${name}`;

const greeting4 = () => (`Hola Mundo`); // no es necesario los parentesis por ser tipo primitivo

console.log(greeting3('Pablo'));
console.log(greeting4());


// retornar un objeto
const getUser = () => ({
    uid:'ldldld',
    username:'kdkd',
})
console.log(getUser());



// 1. transformar a flecha
// 2. retornar objeto implicito
// 3. probar

function getActiveUser(name) {
    return  {
        uid: '12345',
        username: name,
    }
};


const activeUser = getActiveUser('Pablo')
console.log(activeUser);


const getActiveUser2 = (fullName) => ({
    uid: '12345',
    username: fullName,
});


const activeUser2 = getActiveUser('Pablo2')
console.log(activeUser2);
