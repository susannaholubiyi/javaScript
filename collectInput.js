const readline = require('readline');
const constant = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

constant.question("Enter any text: ", (userInput)=> {
console.log('You entered: ' + userInput);
constant.close();
});
