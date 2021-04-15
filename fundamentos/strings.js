const escola = "Cod3r"

console.log(escola.charAt(4)) // Noção de Array
console.log(escola.charAt(5)) // Não joga nenhum erro, só um espaço vazio
console.log(escola.charCodeAt(3)) // valor na tabela Unicode/ASCII
console.log(escola.indexOf('3')) // retorna o índice relacionado ao dígito 3

console.log(escola.substring(1)) // Pega do índice 1 do Array para frente
console.log(escola.substring(0, 3)) // Caso: vá do índice 0 e me dê três caracteres

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!") // Mesma coisa acima, só usando o sinal de soma

// Literal é um dado que não é armazenado numa variável

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // Regex substituindo dígitos
console.log(escola.replace(/\w/g, 'e')) // Regex substituindo letras usando o 'g' de global, caso contrário seria só a primeira letra

console.log('Ana, Maria, Pedro'.split(','))
console.log('Ana, Maria, Pedro'.split(/,/)) // Executa a mesma função do código acima, só que com regex