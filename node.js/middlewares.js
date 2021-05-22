// middleware pattern / chain of responsability

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx) => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && // verificando se o índice é menor que o comprimento das funções fora do array
            middlewares[indice](ctx, () => execPasso(indice+1)) // recursividade
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)