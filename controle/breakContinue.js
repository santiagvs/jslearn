const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break // age em estruturas de repetição e switch/case
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        continue // pula o índice determinado, age só em estruturas de repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (var a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
} // não usar esse código