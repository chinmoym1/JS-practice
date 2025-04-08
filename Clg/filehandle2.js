// create any file in which data input by the user

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fs = require('fs');
rl.question('Please enter your name: ', (answer) => {
  fs.appendFile('userInput.txt', `User  input: ${answer}\n`, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('User  input saved to file.');
    }
  });
  rl.close();
});