const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha1 = Object.create(pai) // Passa o 'pai' como primeiro parâmetro, ele já cria o objeto filha1 com protótipo de pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2){
    filha2.hasOwnProperty(key) ? // ver se o atributo é autêntico ou herda de outro objeto.
        console.log(key) : console.log(`Por herança: ${key}`)
}
