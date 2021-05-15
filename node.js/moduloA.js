// Cada arquivo representa um módulo em Node
// O módulo é visível apenas dentro dele mesmo
// Para tornar visível, é necessário exportar

/* Formas de exportar: */
console.log(this)
this.ola = 'Fala pessoal' // em Node, com o 'this', essa frase pode ser acessada em outro arquivo
exports.bemVindo = 'Bem vindo ao Node!'
module.exports.ateLogo = 'Ate próximo exemplo'

// Estão sendo colocados três atributos de formas diferentes no MESMO objeto.