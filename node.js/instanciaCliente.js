const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // outro parentenses deve ser adicionado, pois está chamando uma função factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc() // dois incrementos
console.log(contadorA.valor, contadorB.valor) // o contador B percebe o incremento do contadorA

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // se o objeto tiver sido criado, retorna sempre a mesma instância