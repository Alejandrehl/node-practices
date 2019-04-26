// const fs = require('fs'); Default
// const fs = require('express'); //Packages
// const fs = require('./fs'); //Added to project
const { createFile } = require('./multiply/multiply'); //Destructuration

let argv = process.argv;
let param = argv[2];
let base = param.split("=")[1];

createFile(base)
    .then(file => console.log(`Created file: ${file}`))
    .catch(err => console.log(`Error: ${err}`));

// For use the method by console 
// Exec the folliwing command: node app --base=12
// 12 is any number