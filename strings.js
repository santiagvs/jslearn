const school = "Cod3r"

console.log(school.charAt(4)) // Noção de Array
console.log(school.charAt(5)) // Não joga nenhum erro, só um espaço vazio
console.log(school.charCodeAt(3)) // valor na tabela Unicode/ASCII
console.log(school.indexOf('3')) // retorna o índice relacionado ao dígito 3

console.log(school.substring(1)) // Pega do índice 1 do Array para frente
console.log(school.substring(0, 3)) // Caso: vá do índice 0 e me dê três caracteres

console.log('Escola '.concat(school).concat("!"))
console.log('Escola ' + school + "!") // Mesma coisa acima, só usando o sinal de soma

// Literal é um dado que não é armazenado numa variável

console.log(school.replace(3, 'e'))
console.log(school.replace(/\d/, 'e')) // Regex substituindo dígitos
console.log(school.replace(/\w/g, 'e')) // Regex substituindo letras usando o 'g' de global, caso contrário seria só a primeira letra

console.log('Ana, Maria, Pedro'.split(','))
console.log('Ana, Maria, Pedro'.split(/,/)) // Executa a mesma função do código acima, só que com regex