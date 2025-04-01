//using literals and array constructor

var x= [1,2,3,4,5]
//console.log(x)

var z= Array(10,20,30,40,50)
//console.log(z)

//WAP in JS to define age of ten emoloyees which is input by user and find the greatest/eldest employees
//let age=[];
//for(var i=1;i<10;i++)
    //let x= prompt("Enter age of ten employee")


//WAP in JS to find the sum of any two elements in array whose sum is 15. print the index no. of these elements.
let arr=[2,3,4,5,6,7,9,11]
for(i=0;i<arr.length-1;i++){
    for(j=i+1;j<arr.length;j++){
        let ans=arr[i]+arr[j]
        if (ans==15){
            console.log(i," ", j)
        }
    }
}

// let l=0, h=7;
// while(l<h){
//     let ans=arr[l]+arr[h] 
//     if(ans==15){
//         console.log(l," ",h )
//         l++
//         h--
      
//     }
//     else if(ans>15){
//         h--

//     }
//     else{
//         l++
//     }
// }



