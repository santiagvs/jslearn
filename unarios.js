let num1 = 1
let num2 = 2

num1++ // posfix
console.log(num1)
--num1 // prefix tem uma precedência maior
console.log(num1)

console.log(++num1 === num2--) // Verdadeiro, pois o prefix começou antes da operação, e o posfix somente após, portanto tendo o mesmo valor
console.log(num1 === num2)