function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto // instanciando objetos para a função
console.log(obj1.__proto__ === obj2.__proto__) // todos objetos criados a partir da mesma função construtora apontam para o mesmo protótipo
console.log(MeuObjeto.prototype  === obj1.__proto__) // quando se cria um objeto a partir duma função construtora usando new, o protótipo desse objeto aponta para a função criada.__proto__

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // alterando a referência: em vez de obj3 apontar pra Object.prototype, aponta para MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumo

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // quando um objeto é instanciado a partir da função, eles são iguais
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // Depois do Object.prototype não existe mais nenhum protótipo/objeto