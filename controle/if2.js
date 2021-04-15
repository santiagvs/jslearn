function teste1(num) {
    if(num > 7)
        console.log(num) // JS não é baseado em indentação, então apenas a primeira sentença depois do if é executada
        console.log('Final') // esta sentença é independente
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // não se usa ponto e vírgula nas sentenças com estruturas de controle, nesse caso é uma sentença vazia
        console.log(num) // bloco de código executado independentemente
    }
}

teste2(6)
teste2(8)