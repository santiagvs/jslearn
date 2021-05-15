// Aquilo que se exporta pra fora de um módulo, é apenas o que estará visível para fora

let a = 2 // isso é somente visível dentro do módulo

module.exports = { // versão mais comum, atribuir um objeto literal ao module.exports
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}

/*
    Se tentar usar apenas "exports { }" para fazer a exportação de um objeto, vai dar erro.
    Mesma coisa caso tente usar "this { }". O ideal é usar module.exports completo.
*/