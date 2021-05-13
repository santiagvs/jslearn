/*const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) {
    console.log(i, notas[i]) // te dá os índices, não as notas. Tem que colocar as notas no console.
}
*/
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29, 
    peso: 64
}

for (let atributo in pessoa) { // para que não tenha acesso ao índice, usa-se o let, por isso é boa prática.
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
