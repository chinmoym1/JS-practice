const x = require('readline');
const r = x.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r.question("Enter value of n: ", async(n) => {
  let sum = 0;
  let count = 0;
  for(let i=1;i<=parseInt(n);i++){
    await new Promise((resolve)=>{
      r.question(`enter the number ${i}:`,(a) =>{
          sum= sum + parseInt(a);  
          resolve();
        });
      });
    }
    console.log(`Sum is ${sum}`);
    r.close();
});