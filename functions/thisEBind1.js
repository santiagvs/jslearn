const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas OO e Funcional

const falarDePessoa = pessoa.falar.bind(pessoa) // quando chamar essa função, o this será sempre resolvido para *pessoa*
falarDePessoa()

/* Bind serve para "amarrar" o this ao objeto referido */