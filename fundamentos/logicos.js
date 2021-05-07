function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2 // Vendo o primeiro operando Falso, não vê o segundo
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // diferença simula ou exclusivo
    const manterSaudavel = !comprarSorvete // operador unário
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // objeto para retornar tudo de uma vez
    // mas quando se omite a chave, simplesmente passando uma constante ou uma variável
    // dá para colocar o valor da constante, contudo continua chave valor
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))