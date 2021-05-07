const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// Como var não tem escopo de bloco, nesse caso o resultado sairá como 10 em ambos os casos.