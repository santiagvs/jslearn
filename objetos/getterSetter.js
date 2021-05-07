const sequencia = {
    _valor: 1, // convenção de variável privada, não impede de alterar diretamente o valor
    get valor() { return this._valor++ },
    // set valor(valor) { this._valor = valor }
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)