Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // os três parâmetros
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice) { // função callback usando o forEach usa 3 parâmetros
    console.log(`${indice+1}) ${nome}`)
})