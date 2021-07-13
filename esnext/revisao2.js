// Arrow Function
const soma = (a, b) => a + b // Funções arrow são sempre anônimas
console.log(soma(2, 3))

const subt = (a, b) => { // quando se coloca um corpo na Arrow, é necessário colocar return
    return a - b         // caso contrário retorna undefined
}
console.log(subt(3, 2))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Sou mais forte')

// operador REST
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))