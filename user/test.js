let a=[1,2] 
let b= a        //reference of array is passed
b.push(3)
console.log(a)

let {length}= "chinmoy"; //{}destructuring with string
console.log(length);

x=10
console.log(x);
var x;

const user={
    name:"chinmoy",
    address: null
}
console.log(user.address?.street);  //use optional chaining operator? for no type error

let z=10>9>8
console.log(z===true);

const data={
    name:"sam",
    name:"ram"
}
console.log(data.name)