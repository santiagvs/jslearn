const nums = [1, 2, 3, 4, 5]

// Map é um For com propósito
let resultado = nums.map(function(e) { // Função para transformar cada um dos elementos
    return e * 2
})

console.log(resultado)

// Map gera um novo array, não modifica um array atual

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
// a função acima transforma em número real, estabelece 2 casas decimais e troca os pontos da linguagem por vírgula
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)