// Cumprimentar
/*
function cumprimentar(nome) {
    return `Olá, ${nome}!`
}

console.log(cumprimentar('Leonardo'))
console.log(cumprimentar('Maria'))

// Idade de anos em dias
function converterAnosParaDias(idade) {
    return idade * 365
}

console.log(converterAnosParaDias(25))
console.log(converterAnosParaDias(70))

// Hora x Salário

function calcularSalário(salMensal, salHora) {
    return `Salário igual a ${salMensal * salHora}`
}

console.log(calcularSalário(150, 40.5))

function nomeDoMes(mes) {
    switch (mes) {
        case 12:
            return 'Dezembro'
            break;
        case 11:
            return 'Novembro'
            break;
        case 10:
            return 'Outubro'
            break;
        case 9:
            return 'Setembro'
            break;  
        case 8:
            return 'Agosto'
            break;
        case 7:
            return 'Julho'
            break;
        case 6:
            return 'Junho'
            break;
        case 5:
            return 'Maio'
            break;
        case 4:
            return 'Abril'
            break; 
        case 3:
            return 'Março'
            break;
        case 2:
            return 'Fevereiro'
            break;
        case 1:
            return 'Janeiro'
            break;                   
    
        default:
            return 'Digite um número entre 1 e 12.'
            break;
    }
}
// Para não dar undefined no final, é necessário usar RETURN, não console.log
console.log(nomeDoMes(1))
console.log(nomeDoMes(4))
*/

// outra maneira de se fazer:

function receberNomeDoMes(numero) {
    const mapeamento = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return mapeamento[--numero];
}

console.log(receberNomeDoMes(1))

/*
function maiorOuIgual(num1, num2) {
    if (num1 > num2 || num1 === num2) {
        return true
    } else {
        return false
    }
}

function maiorOuIgual(num1, num2) {
    if(typeof num1 != typeof num2) return false
    return num1 >= num2
    }

console.log(maiorOuIgual(1,0))
console.log(maiorOuIgual(5,1))
console.log(maiorOuIgual(0,"0"))
*/