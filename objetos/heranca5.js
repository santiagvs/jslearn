console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// esses, como tem tipo de função, tem atributo .prototype

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() { // tem o shift() que faz semelhante, mas faz um novo array.
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function() { // substituindo uma função que já existe
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())