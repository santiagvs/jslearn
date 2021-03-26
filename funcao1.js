/*
    Função é como um verbo, uma ação
    A função executa um processo baseado numa sequência de código
    Função define um bloco - {} -  associado
    Bloco = corpo da função
    Função é um trecho de código que foi dado um nome
    Função é um bloco de código que pode ser reusado várias vezes no algoritmo
    Esse bloco de código nomeado (a Função em si é isso)
    A função recebe parâmetros de entrada
    Quando o algoritmo é executado no final retorna um valor
    Função pode não receber nenhum parâmetro
    Pode não retornar dado
    Pode receber, mas não retornar, vice-versa
*/

// função sem retorno

function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Not a Number, porque o b (sem valor padrão) é undefined
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // depois do a e b o JS ignora os demais
imprimirSoma()

// função com retorno

function soma(a, b = 1){
    return a + b
}

// soma(2, 3) -> nesse caso não iria mostrar o valor, porque só pediu para retornar.
console.log(soma(2, 3))
console.log(soma(2))
console.log()