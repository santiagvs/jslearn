const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

/* Na abordagem imperativa, o processo é mais importante que o resultado
pois é mais importante COMO deve ser feito do que O QUE deve ser feito. */

/* Na abordagem declarativa, é o contrário: se diz o que deve ser feito
sem se importar com os detalhes internos.
Promove o reuso com funções pequenas bastante especialistas e deixa o código mais polido. */