// Referenciar Lodash é a partir do underline _

const _ = require('lodash') // Não precisa colocar o caminho relativo, pois o Lodash tem um arquivo próprio que vai requerer
setInterval(() => console.log(_.random(50, 600)), 2000)