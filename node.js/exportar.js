console.log(module.exports) // inicia como objeto vazio
console.log(module.exports === this)
console.log(exports === this)
console.log(exports === module.exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // exports isolado só serve para uma atribuição primeira, quando o module.exports estava vazio
console.log(module.exports) // module.exports aponta para o mesmo objeto, para a mesma referência em memória
// e só quem será retornado é o que está dentro de module.exports

exports = { 
    nome: 'Teste' // o objeto alterado não será retornado usando só exports
}

console.log(module.exports)

// jeito correto de mudar a atribuição do objeto, o exports isolado só serve para uma atribuição primeira

module.exports = {publico: true}
