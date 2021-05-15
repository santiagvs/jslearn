// arquivo para acessar os módulos A e B
// 'Cliente' essa classe vai usar outros módulos
// Para importar usando o CommonsJS, tem que se usar a palavra require
// Se estiver exportando um arquivo JavaScript, não é necessário colocar a extensão se for .js

const moduloA = require('./moduloA') // usando o caminho relativo do arquivo, em módulos de terceiros não é necessário
const moduloB = require('./moduloB') // Require é necessário para ter acesso ao que for exportado

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)