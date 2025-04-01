//find the sum of any n natural numbers

const x= require('readline');
const r= x.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
);
r.question("Enter value of n: ",(n) =>{
    let sum=0;
    for(let i=1;i<=parseInt(n);i++){
        r.question(`enter the number ${i}:`,(a) =>{
            sum= parseInt(sum) + parseInt(a);

            console.log(`Sum is ${sum}`);
            r.close();
        });

    }
});

// const x = require('readline');
// const r = x.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r.question("Enter value of n: ", (n) => {
//   let sum = 0;
//   let count = 0;

//   // Define a recursive function to handle the input one by one
//   function getInput(i) {
//     if (i <= n) {
//       r.question(`Enter the number ${i}: `, (a) => {
//         sum += parseInt(a);
//         count++;
//         if (count === n) {
//           console.log(`Sum is ${sum}`);
//           r.close();
//         } else {
//           getInput(i + 1); // Call recursively to get the next number
//         }
//       });
//     }
//   }

//     getInput(1); // Start the recursive function
// });
