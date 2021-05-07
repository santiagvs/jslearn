let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c) // this é igual a module.exports
console.log(module.exports === this)
console.log(module.exports) // retorna um objeto

// criando variável de biruta sem var e nem let

abc = 3 // não recomendado
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste' }