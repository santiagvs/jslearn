console.log('01)', '1' == 1) // JS identifica igual valor
console.log('02)', '1' === 1) // Mas também identifica que não são do mesmo tipo
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3) // Símbolo de estritamente diferente, são iguais e diferentes em tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // São falsos, porque o endereço de memória é diferente
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // Verdadeiro, pois têm o mesmo tipo e o mesmo valor
console.log('12)', undefined == null) 
console.log('13)', undefined === null) 

// É melhor usar o estritamente igual, pois não se confundem os tipos