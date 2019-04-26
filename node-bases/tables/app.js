const { createFile, listTable } = require('./multiply/multiply');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'list':
        listTable(argv.base, argv.limit);
        break;
    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log(`Created file: ${file}`.green))
            .catch(err => console.log(`Error: ${err}`.red));
        break;
    default:
        console.log('Command not found.');
}

// For use the method by console 
// Exec the folliwing command: node app create --limit 5 --base 20 to create a file.
// 12 is any number