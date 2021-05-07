class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // uma classe tem outra classe como protótipo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // chamando o construtor de Avo, a superclasse
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') // se não definir o outro parâmetro, ele assume da superclasse
    }
}

const filho = new Filho
console.log(filho)