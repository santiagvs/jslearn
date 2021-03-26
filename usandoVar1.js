{ 
    { 
        { 
            { 
                var sera = 'Será???' 
                console.log(sera)
            } 
        } 
    } 
}
console.log(sera)

/*
    Variável VAR dentro de um bloco de código que não estiver dentro de uma função
    Ficará visível para todo mundo que estiver fora do bloco
    Var só tem dois escopos possíveis
*/

function teste() {
    var local = 123
    console.log(local)
}

teste()

// Quando se cria uma variável fora de uma função, é uma variável global
// Deve-se fugir da variável global pois qualquer sobrescrita da variável
// pode gerar problemas futuros.

// Var = global (visível a todos) ou escopo de função