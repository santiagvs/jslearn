var numero = 1 
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

// Let possui escopo de bloco, estão em escopos diferentes, não haverá conflito
// Também dá preferência ao escopo menor, não encontrando, busca no mais abrangente
// Let => escopo global, função e de bloco