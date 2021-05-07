const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) { // função callback usando o forEach usa 3 parâmetros
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) // usando arrow function

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)