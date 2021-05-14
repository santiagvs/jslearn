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
*/
function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numeros, indice) => {
        const numeroPar = numeros % 2  === 0
        const indicePar = indice % 2 === 0
        // o operador % vê se o número é divisível pelo número declarado.
        // neste caso, o operador não irá declarar os quatro primeiros números, pois:
        // 0 % 2 == false, 1 % 2 == false, 2 % 2 == true (porém o [2] é 3, então false), e 3 % 2 é false.

    return numeroPar && indicePar
    })
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4, 6, 7, 8]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))


/*

function checarAnoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentros = ano % 400 == 0

    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentros 
}

console.log(checarAnoBissexto(2020))*/