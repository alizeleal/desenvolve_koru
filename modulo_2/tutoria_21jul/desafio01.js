// Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

const isAdult = (person) => {
    return { ...person, isAdult: person.age >= 18 };   
}

// Testando a função isAdult
const person = { name: "João", age: 20 };   
console.log(isAdult(person)); // { name: "João", age: 20, isAdult: true }

// Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)
const combineArrays = (...arrays) => {
    return [].concat(...arrays);
}       
// Testando a função combineArrays
const array1 = [1, 2, 3];       
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
console.log(combineArrays(array1, array2, array3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
