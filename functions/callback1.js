const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // Para cada elemento que será encontrado no array, ele vai chamar de volta a função para cada elemento que for encontrado
fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
})
// fabricantes.forEach(fabricante => console.log(fabricante)) // arrow

/* Callback nada mais é que passar uma função e essa função será chamada
quando um evento acontecer. */
/* Nesse caso, o evento é um loop que cada vez que encontra um elemento
ele dispara o callback e a função roda. */