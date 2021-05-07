const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro de novo // remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona como primeiro
console.log(pilotos)

// Splice pode remover e adicionar elementos

// adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // dentro do () é o índice
console.log(pilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // um a quatro, mas o quatro não pega
console.log(algunsPilotos2)