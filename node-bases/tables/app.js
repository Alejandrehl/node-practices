// const fs = require('fs'); Default
// const fs = require('express'); //Packages
// const fs = require('./fs'); //Added to project
const { createFile } = require('./multiply/multiply'); //Destructuration

let base = 1; //Change this number

createFile(base)
    .then(file => console.log(`Created file: ${file}`))
    .catch(err => console.log(`Error: ${err}`));