// pessoa -> 123 -> {...}
// Ou seja, o que se altera é objeto, não a constante. Constantes vão apontar pro mesmo endereço
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = { nome: 'Ana' } | Esse objeto está alterando o endereço de memória, o que resulta em erro.

Object.freeze(pessoa) // objeto congelado não é possível ser alterado, adicionado ou excluído
pessoa.nome = 'Maria'
pessoa.end = 'Rua A, 35'
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' }) // já pode ser criado congelado
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
obj2.nome = 'Victor'
console.log('obj2')
// Forma de declarar objetos diretamente