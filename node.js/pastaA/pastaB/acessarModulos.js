// caminho relativo atravessando duas pastas (ideal)
const moduloA = require('../../moduloA') // no Linux é case sensitive, tem que respeitar as maiúsculas e minúsculas
console.log(moduloA.ola)

// caminho absoluto
const moduloB = require('/home/scutum/Programming/curso-js/jslearn/node.js/moduloB')
console.log(moduloB.boaNoite())

const c = require('./pastaC') // como essa pasta possui index.js, o Node busca automaticamente o arquivo sem o caminho relativo
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)