// const fs = require('fs'); Default
// const fs = require('express'); //Packages
// const fs = require('./fs'); //Added to project
const argv = require('yargs')
    .command('list', 'Print the multiplication table in the console.', {
        base: {
            demand: true,
            alias: 'b'
        },
        limit: {
            alias: 'l',
            default: 10
        },
    })
    .help()
    .argv;
const { createFile } = require('./multiply/multiply'); //Destructuration

console.log(argv.base);
console.log(argv.limit);

// let param = argv[2];
// let base = param.split("=")[1];

// let base = 5;
// createFile(base)
//     .then(file => console.log(`Created file: ${file}`))
//     .catch(err => console.log(`Error: ${err}`));

// For use the method by console 
// Exec the folliwing command: node app --base=12
// 12 is any number