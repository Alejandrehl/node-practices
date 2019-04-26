const fs = require('fs'); //Default
// const fs = require('express'); //Packages
// const fs = require('./fs'); //Added to project
let base = 4; //Change this number
let data = '';

for (let i = 1; i <= 10; i++) {
    data += (`${base} * ${i} = ${ base * i}\n`);
}

fs.writeFile(`./table-messages/message-base-${base}.txt`,
    data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });