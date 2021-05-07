console.log(soma(3, 4))

// function declaration
// antes de declarar a função deste modo, é possível chamá-la
function soma(x, y) {
    return x + y
}

// function expression
// esta função não pode ser chamada antes, diferente da function declaration
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4))
// named function expression
// esta função não pode ser chamada antes, diferente da function declaration
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))