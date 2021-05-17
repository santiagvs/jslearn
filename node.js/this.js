console.log(this === global) // this aponta pra module.exports, aponta para global só DENTRO de uma função
console.log(this === module) // this é o objeto que tem a mesma referência de module.exports

console.log(this === module.exports)
console.log(this === exports) // exports aponta pro mesmo endereço de memória de module.exports

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // aponta pro global dentro da função

    this.perigo = '...' // dentro do escopo global
}

logThis() // dentro de uma função, o this aponta para a função, não para o exports