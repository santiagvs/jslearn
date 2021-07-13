// REST para juntar e Spread para espalhar
// usar rest como parâmetro de função

const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // aqui estão sendo clonados os atributos de funcionario com o operador rest

console.log(clone)

// Spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)