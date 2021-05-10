let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) // Neste contexto do Node, o this aponta pro objeto global.

const obj = {}
comparaComThis = comparaComThis.bind(obj) // A partir daqui, o this vai apontar para "obj"
comparaComThis(global) // Falso, não é mais igual ao global.
comparaComThis(obj) // Verdadeiro, pois o this agora é amarrado ao obj

let comparaComThisArrow = param => console.log(this === param)
comparaComThis(global) // Falso pois o this Arrow aponta para um módulo do Node, ele foi escrito do módulo.
comparaComThisArrow(module.exports) // Referenciando o módulo atual.

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // A arrow tem procedência frente ao bind, o this arrow é praticamente imutável, segue no mesmo contexto.
comparaComThisArrow(module.exports) // Arrow continua apontando para o módulo.
