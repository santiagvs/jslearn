const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 4', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel() // cancelamento da tarefa 1
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // hora de segunda a sexta
regra.hour = 16
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra
, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})