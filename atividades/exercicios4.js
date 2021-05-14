function somarNumeros(numeros) {
    let soma = numeros.reduce( (acumulador,valorAtual) => acumulador + valorAtual, 0 )

    return soma
}
console.log(somarNumeros([1,2,3,4]))
console.log(somarNumeros([15, 15, 15, 15]))

//

function despesasTotais(objetos) {
    const precos = objetos.map(p => p.preco).reduce( (acumulador,valorAtual) => acumulador + valorAtual, 0 )

    return precos
}

console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]))
console.log(despesasTotais([{nome: "Jornal online", categoria: "Informação", preco: 89.99}, {nome: "Cinema", categoria: "Entretenimento", preco: 150}]))

//

function calcularMedia(array) {
    let soma = array.reduce( (acumulador, valorAtual) => acumulador + valorAtual, 0)

    return soma / array.length
}

console.log(calcularMedia([0,10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))

//

function areaDoTriangulo(base, altura) {
    const area = (base * altura) / 2

    return area.toFixed(2)
}

console.log(areaDoTriangulo(10,15))
console.log(areaDoTriangulo(7, 9))
console.log(areaDoTriangulo(9.25, 13.1))

//

/* Building an own function */
Array.prototype.min = function() {
    return Math.min.apply(null, this)
}

function menorNumero(array) {
    return array.min()
}

/*function menorNumero(numeros) {
    return Math.min(...numeros);
}*/

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))