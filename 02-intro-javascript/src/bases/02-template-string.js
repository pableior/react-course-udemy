const firstName = 'Pablo';
const lastName = 'Gonzalez';

// const fullName = firstName + ' ' + lastName;

// const fullName = `\
// ${firstName} 
// ${lastName}
// ${1+1}
// `;

const fullName = `${firstName} ${lastName}`;


console.log(fullName);


function geGreeting(theName) {
    return 'Hola ' + theName;
}

console.log(`Este es un texto: ${geGreeting(fullName)}`)