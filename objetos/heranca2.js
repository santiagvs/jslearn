// prototype chain
Object.prototype.attr0 = '0' // não faça isso em casa
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'} // Sombreamento: o atributo debaixo sombreia o atributo acima.
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        this.velAtual + delta <= this.velMax ? this.velAtual += delta : this.velAtual = this.velMax
        /*if (this.velAtual + delta <= this.velMax) { usei ternário acima só pra dar um charme
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }*/
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() { // super
        return `${this.modelo}: ${super.status()}` // Sombreando o status() a partir do objeto volvo, chamando o método do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro) // Define a relação de protótipo daquele objeto
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())