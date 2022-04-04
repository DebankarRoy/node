const EventEmitter = require('events');
const event = new EventEmitter();

//defining
event.on('my_name', () => {
    console.log('My name is debankar');
});

event.on('page_chk', (sts,msg) => {
    console.log(`status code is ${sts} and page is ${msg}`);
});

//calling
event.emit('my_name');
event.emit('page_chk',200,'ok');

