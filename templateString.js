const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// Pode-se colocar expressões aritméticas

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Função Arrow
console.log(`Ei... ${up('cuidado')}!`)