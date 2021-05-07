// pessoa -> 123 -> {...}

const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // objeto congelado não é possível ser alterado, adicionado ou excluído
pessoa.nome = 'Maria'
pessoa.end = 'Rua A, 35'
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' }) // já pode ser criado congelado
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)