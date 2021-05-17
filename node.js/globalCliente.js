require('./global') // Só basta fazer isso uma vez, porque o global já vai ter isso

console.log(MinhaApp.saudacao()) // tem que usar com cuidado. O ideal é usar módulos
MinhaApp.nome = 'Eita!' // os objetos do global podem ser mudados 
console.log(MinhaApp.nome)