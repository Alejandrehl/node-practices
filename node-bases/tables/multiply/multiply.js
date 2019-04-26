const fs = require('fs');

let createFile = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('The base is not a number.');
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += (`${base} * ${i} = ${ base * i}\n`);
        }

        fs.writeFile(`./table-messages/message-base-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`message-base-${base}.txt`);
        });
    });
};

module.exports = {
    createFile
};