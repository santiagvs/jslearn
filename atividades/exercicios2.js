/*
function inverso(valor) {
    const tipo = typeof valor

    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else 
        return `Booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso("6"))
console.log(inverso(-2000))


function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo // com o Inclusivo retorna maior/menor igual

    return numero > minimo && numero < maximo // Sem inclusivo, só o maior/menor
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))

//

function multiplicar(a, b) {
    return a / (1 / b)
}

console.log(multiplicar(5,5))
console.log(multiplicar(0,7))
console.log(multiplicar(95,10))


function repetir(rep, vezes) {
    return Array(vezes).fill(rep)
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))



function simboloMais(qntd) {
    return '+'.repeat(qntd)
}

console.log(simboloMais(2))
console.log(simboloMais(4))


function receberPrimeiroEUltimoElemento(elementos) {
    let primeiroElemento = elementos.shift() // retorna o primeiro elemento do array
    let ultimoElemento = elementos.pop() // retorna o último elemento do array
    return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([7,14, 'jacaré']))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))
*/

function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto) // gera um objeto novo concatenando
    delete copia[nomeDaPropriedade]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))
console.log(removerPropriedade({ id: 20, nome: "caneta", descricao: "Não preenchido" }, "descricao"))