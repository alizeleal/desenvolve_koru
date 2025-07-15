// Exercícios com estruturas condicionais

// Verificação de idade
const age = 17;

if (age >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

// Verificação com múltiplas condições
const hour = 14;

if (hour < 12) {
    console.log("Bom dia!");
} else if (hour < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Operadores lógicos
const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Não precisa trabalhar hoje!");
} else {
    console.log("Dia de trabalho!");
}

// Operador ternário
const status = age >= 18 ? "Adulto" : "Menor";
console.log("Status:", status);




/*Crie um sistema de classificação de notas:
0-59: F
60-69: D
70-79: C
80-89: B
90-100: A*/

const nota = 87.5

if (nota>89) {
    console.log("Grade A")
} else if (nota > 79) {
    console.log("Grade B")
} else if (nota > 69) {
    console.log("Grade C")
} else if (nota > 59 ) {
    console.log("Grade D")
} else {
    console.log("Grade F")
}




/*Verifique se um número é par ou ímpar*/


const verifiedNumber = 33

if (verifiedNumber%2 != 0) {
    console.log(`o número ${verifiedNumber} é ímpar`)
} else {
    console.log(`o número ${verifiedNumber} é par`)
}

/*Crie uma verificação que diga se uma pessoa pode dirigir (precisa ser maior de idade E ter habilitação)*/

const idade = 17

if (idade < 18) {
    console.log("Não pode dirigir")
} else {
    console.log("Pode dirigir.")
}