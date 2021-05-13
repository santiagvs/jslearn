function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// Quando o objeto é global
global.preco = 20
global.desc = 0.1
console.log(getPreco()) // chamando a função diretamente

console.log(produto.getPreco()) // chamando a função a partir de um objeto

const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // no call, sempre primeiro se passa o contexto e depois os parâmetros da função definida
console.log(getPreco.apply(global, [0.17, '$'])) // no apply, se passa os parâmetros dentro de um array

// Em suma, call e apply servem para indicar o contexto e os parâmetros, sendo formas
// diferentes de invocar uma função.