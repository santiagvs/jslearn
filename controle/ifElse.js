const imprimirResultado = function (nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // vai funcionar, mas o JS que é uma linguagem fracamente tipada vê que não é maior nem igual a 7, e retorna o valor falso
