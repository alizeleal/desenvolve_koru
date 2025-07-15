// Exercícios de manipulação de strings

// 1. Declaração e concatenação
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);

// 2. Template strings (ES6)
const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

// 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());

/*Faça estas operações:

Extraia o primeiro nome usando o método slice ou substring*/
const slicedString = fullName.slice(start = 0, end = 5)

console.log("O primeiro nome é: ", slicedString)


/*Verifique se o nome completo contém a letra 'a'*/

let isA = 0;

for (let i = 0; i < fullName.length; i++){    
    if (fullName[i] === "a") {
        isA++
    }
}

if (isA > 0) {
    console.log(`O nome ${fullName} contém ${isA} letras a`)
} 

/*Substitua "Silva" por outro sobrenome usando replace*/


let replacedSurname = fullName.replace("Silva", "Alves")
console.log(`Trocando o sobrenome, temos ${replacedSurname}`)

