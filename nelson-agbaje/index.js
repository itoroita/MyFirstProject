let a = 100;
let b = 500;
console.log(a+b);
let bi = parseInt(process.env.NODE_ENV + b);




Buffer


console.log(bi);
const buffFromArray = Buffer.from([]);
console.log (buffFromArray.toString()) 
const arrayBuffer = new Uint16Array(2);
console.log (arrayBuffer);
arrayBuffer[0] =5
arrayBuffer[1] =7000
console.log(arrayBuffer);

const buffFromArrayBuffer = Buffer.from(arrayBuffer.buffer);
console.log(buffFromArrayBuffer);

const fs = require('fs')
fs.writeFile('message.txt','Hello World', (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    } else {
        console.log('writing is done')
    }
});