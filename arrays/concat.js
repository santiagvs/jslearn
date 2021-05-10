const filhas = ['Valesca', 'Sibalena']
const filhos = ['Washington', 'Wesley']
const todos = filhas.concat(filhos, 'Fulano') // pode passar parâmetros variáveis
console.log(todos, filhas, filhos)

console.log([].concat([1,2], [3,4], 5, [[6,7]]))