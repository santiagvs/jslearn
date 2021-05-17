const fs = require('fs')

const caminho = __dirname + '/arquivo.json' // __dirname: localização + nome do arquivo

// síncrono, não tão recomendado, pois se o arquivo for grande pode travar o event loop
const conteudo = fs.readFileSync(caminho, 'utf-8') // definindo o arquivo a ser lido e o encoding
console.log(conteudo)

// assíncrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => { // passando a callback para fazer os tratamentos em cima do arquivo
    const config = JSON.parse(conteudo) // necessário para poder ler o objeto
    console.log(`${config.db.host}:${config.db.port}`) // 
}) // esse readfile é assíncrono: só carrega quando a callback chegar, por isso o console.log abaixo é mostrado primeiro

const config = require('./arquivo.json')
console.log(config.db) // já instanciado sem precisar usar parse

// leitura de pasta //fs.readdir ( path, options, callback)
fs.readdir(__dirname, (err, arquivos) => { // __dirname é uma constante que está no Node e representa o diretório atual
    console.log('Conteúdo da pasta: ')
    console.log(arquivos)
})