const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Pega as chaves do objeto (os "nomes" dos objetos)
console.log(Object.values(pessoa)) // Pega os valores do objeto
console.log(Object.entries(pessoa)) // Transforma o objeto em um array maior e subarray com objetos menores

Object.entries(pessoa).forEach(([chave, valor]) => {  // destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, 
    writable: false, // freezou
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // listou porque o enumerable está habilitado

// Object.assign gera um objeto que concatena todos os objetos chamados
const dest = {a: 1}
const o1 = {b :2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)