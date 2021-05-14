function funcaoDaSorte(numero) {
    const sorte = Math.floor(Math.random() * 11)
    return sorte == numero ? `Parabéns! O número sorteado foi o ${sorte}` :`Que pena! O número sorteado foi o ${sorte}` 
}

console.log(funcaoDaSorte(7))

//

function contarPalavras(verbo) {
    return verbo.split(' ').length
}

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))

//

function contarCaractere(caractere, frase) {
    return [...frase].filter(letra => letra === caractere).length
}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))

//

function buscarPalavrasSemelhantes(str, palavras) {
    return palavras.filter(palavra => palavra.includes(str))
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'javascript', 'profissional']))

// my resolution

function removerVogais(str) {
    return str.split('a').join('').split('e').join('').split('i').join('').split('o').join('').split('u').join('')
}

console.log(removerVogais('Fundamentos'))

/* recommended resolution

function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, '')
}

console.log(removerVogais('Fundamentos'))
*/

//

function inverter(obj) {
    let inversao = Object.entries(obj).map(chaveValor => chaveValor.reverse())

    return Object.fromEntries(inversao)
}

console.log(inverter({a: 1, b: 2}))

//

function filtrarPorQuantidadeDeDigitos(array, qntd) {
    return array.filter(numero => {
        const digitos = String(numero).length

        return digitos === qntd
    })
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))

//

function segundoMaior(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundo = numerosOrdenados[1]
    
    return segundo
}

console.log(segundoMaior([12, 16, 1, 5]))

//

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
        const chave = 0,
        valor = 1
    return { nome: estudante[chave], media: media(estudante[valor]) }
})
    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8], 
    Carla: [7, 7, 8, 9]
}))