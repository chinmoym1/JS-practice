// I/P -> PROCESS: stdin
// O/P -> PROCESS: Stdout

const x= require('readline');
const r= x.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
);

// r.question("Enter your name: ",(name) =>{
//     console.log(`My name is ${name}`);
//     r.close();

// });

//input two no and find their sum
r.question("Enter first number: ",(a) =>{
    r.question("enter second number:",(b) =>{
        const sum = parseInt(a)+ parseInt(b);
        console.log(`Sum is ${sum}`);
        r.close();
    });
});

//average of 5 numbers
