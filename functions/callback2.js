const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function (nota) { // filtra os elementos de array e que aplicada numa função, vai dar um callback retornando true ou false
    return nota <= 7
})

console.log(notasBaixas2)

// Arrow
const notasMenorQue7 = nota => nota < 7 // função reutilizável
const notasBaixas3 = notas.filter(notasMenorQue7) // abordagem mais funcional
console.log(notasBaixas3)