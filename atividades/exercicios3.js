/*function filtarNumeros(array) {
    return array.filter(item => typeof item === "number")
}

console.log(filtarNumeros(['Javascript', 1, 4, "3", "Web", 20]))

//

function objetoParaArray(objeto) {
    return Object.entries(objeto)
}

console.log(objetoParaArray({nome: 'Maria', profissao: 'Desenvolvedora'}))
console.log(objetoParaArray({codigo: 111111, preco: 20000}))

//

function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numeros, indice) => {
        const numeroPar = numeros % 2  === 0
        const indicePar = indice % 2 === 0

    return numeroPar && indicePar
    })
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

*/
//

function checarAnoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentros = ano % 400 == 0

    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentros 
}

console.log(checarAnoBissexto(2020))