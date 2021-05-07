// Função é First-Class Object (Citizen) em JS
// Higher-Order Function

// criar de forma literal
function fun1() {}

// pode-se armazenar numa variável
const fun2 = function() {} // função anônima atribuída a uma constante

// armazenar dentro de um array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2,3))

// armazenar funções dentro de atributos de objeto
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

// passar função como param
function run(fun) {
    fun()
}

run(function() { console.log('Executando...') })

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2,3)
cincoMais(4)