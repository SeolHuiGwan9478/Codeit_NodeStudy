const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const obj = {type: 'text', data: 'Hello Seolhuigwan', date: '2023-04-01'};
myEmitter.on('test', (info) => {
    console.log(info);
});

myEmitter.emit('test', obj);