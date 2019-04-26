let getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Alejandro");
        }, 3000);
    });
};

let greeting = async() => {
    let name = await getName();
    return `Hola ${ name }`;
};

greeting().then(message => {
    console.log(message);
});