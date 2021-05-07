const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

// Contexto léxico
// A função carrega consigo a noção onde ela está, procurando em outros escopos