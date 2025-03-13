const EventEmitter = require('events')

const customEmitter =  new EventEmitter()

customEmitter.on('response' , ()=>{
    console.log('recieved')
})

customEmitter.emit('response')