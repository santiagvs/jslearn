function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
// nesses casos pode-se passar parâmetros variáveis, mesmo não
// declarando nenhum parâmetro na declaração da função

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))