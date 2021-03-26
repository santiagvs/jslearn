/*
    Tipos primitivos fazem uma cópia por valor
    Nos objetos a passagem é feita por referência, tem o mesmo endereço na memória 
*/

let valor // não inicializada
console.log(valor)

valor = null // não tem nenhum valor e nem endereço que aponte pra algum lugar na memória
console.log(valor)

// console.log(valor.toString()) // Erro

const produto = {}
console.log(produto.preco) // pode-se tentar acessar algo indefinido desde que o que venha antes dele esteja definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // estratégia para remover o valor
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)