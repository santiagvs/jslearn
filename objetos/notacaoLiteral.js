const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // aqui permite que mude o nome do atributo.
const obj2 = {a, b, c} // criar objeto pelo nome da constante

console.log(obj1, obj2) // ambos têm resultados iguais.

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // o que está em colchetes se torna o nome do atributo, e depois o valor.
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // cria um atributo com o valor, igual ao obj3
console.log(obj4)

// Como definir funções num objeto literal
const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2() {
        //...
    }
}

console.log(obj5)