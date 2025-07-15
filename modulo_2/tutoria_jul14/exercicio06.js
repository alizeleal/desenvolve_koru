// Desafio final - integrando todos os conceitos

// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

let highestMean = 0;
let highestMeanIndex;
let numeroAprovados = 0;
let mediaGeral =0;
for (let i = 0; i < students.length; i++) {
    /*Para cada aluno, calcule a média das notas*/
    let media = 0;
    for (let j = 0; j < students[i].grades.length; j++) {
        media += students[i].grades[j]/students[i].grades.length
    }
    console.log(`A média do(a) aluno(a) ${students[i].name} é ${media.toFixed(2)}`)
    // Determine se cada aluno foi aprovado ou reprovado (média >= 70 para aprovar)
    if (media >= 70) {
        // Conte quantos alunos foram aprovados e quantos foram reprovados0
        numeroAprovados++
        console.log(`O(a) aluno(a) ${students[i].name} foi aprovado(a)\n`)
    } else {
        console.log(`O(a) aluno(a) ${students[i].name} foi reprovado(a)\n`)
    }
    // Encontre o aluno com a maior média
    if (media >= highestMean) {
        highestMean = media;
        highestMeanIndex = i;
    }
    // Calcule a média geral da turma
    mediaGeral+=media/students.length;
}

// Use console.log() para mostrar todos os resultados com mensagens claras*/
console.log(`O(a) aluno(a) com maior média é: ${students[highestMeanIndex].name} com media de ${highestMean.toFixed(2)}.`)

console.log(`A media de notas da turma é ${mediaGeral.toFixed(2)}.`)

console.log(`Foram aprovados ${numeroAprovados} alunos.`)


