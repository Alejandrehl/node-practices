const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    },
};

const argv = require('yargs') //Is a package
    .command('list', 'Print the multiplication table in the console.', options)
    .command('create', 'Generate a file with the multiplication table.', options)
    .help()
    .argv;

module.exports = {
    argv
};