const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('test', () => {
    console.log('1');
});

myEmitter.on('test', () => {
    console.log('2');
});

myEmitter.emit('test');