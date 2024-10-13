// Load events using require()
// EventEmitter is a class and emitter is instance of class(i.e objects)
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('messagelogged',function(){
    console.log("Lister called");
});
// Raise an event
// emit --> signalling an event is happened
// When an event is raised then a listener function is called
emitter.emit('messagelogged');

