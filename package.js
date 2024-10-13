const fs = require('node:fs');
const filecontents = fs.readFileSync("./file.txt","utf-8");
console.log(filecontents);