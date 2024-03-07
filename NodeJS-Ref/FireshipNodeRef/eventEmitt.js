const {EventEmitter} = require('events')

const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', function(){
    console.log("yum")
})
eventEmitter.on('food', function(){
    console.log("yummers")
})

eventEmitter.emit('lunch',)
eventEmitter.emit('food',)