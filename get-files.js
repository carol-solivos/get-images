const fs = require('fs');

let directory = '../icons/';
let dirBuf = Buffer.from(directory);

let files = fs.readdirSync(directory);

console.log(files.filter(x => x.includes('.svg')));