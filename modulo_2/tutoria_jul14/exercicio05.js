// Exercícios com loops

// Loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop for com break
console.log("Loop com break:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Encontrei o 6, parando o loop!");
        break;
    }
    console.log(i);
}

// Loop for com continue
console.log("Pulando números pares:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Pula o resto da iteração
    }
    console.log(i);
}

// Iterando sobre arrays
const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("Lista de frutas:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruta ${i+1}: ${fruits[i]}`);
}


/*Crie um loop que imprima a tabuada do 7 (de 1 a 10)*/
for (let i = 1; i < 11; i++) {
    console.log(`7 x ${i} = ${7*i}`)
}


/*Crie um array de números e calcule a soma deles usando um loop*/


const exampleArray = [3, 4, 5, 6]

let sum=0;

for (let i = 0; i < exampleArray.length; i++) {
    sum+=exampleArray[i]
}

console.log("A soma dos valores do array ", exampleArray, " é ", sum)

/*Crie um loop que identifique o menor valor em um array de números*/

const exampleArray2 = [3, 4, 5, -6, 0, 12, 1, 2]

let lowestNumber = 0;

for (let i = 0; i < exampleArray2.length; i++) {
    if (exampleArray2[i] < lowestNumber) {
        lowestNumber = exampleArray2[i]
    }
}

console.log("O menor numero do array \n", exampleArray2, "\né \n", lowestNumber )