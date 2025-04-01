// //WAP in JS to define any string and count how many number of characters in a string
// var str1="hello";
// //console.log(str1.length);

// //WAP in JS to input any string and replace character a to b
// let str2="javascript"
// let str3=""
// //let str3=str2
// //let temp=str2
// for(let i=0;i<str2.length;i++){
//     if(str2[i]==='a'){
//         //console.log(i)
//         str3+='b';
//     }
//     else{
//         str3+=str2[i];
//     }

// }
// console.log(str3)

//WAP in JS to write paragraph and count no. of lines 
let str= "hello everyon "

var count=0;
for(var i=0;i<str.length;i++){
    if(str[i]=='\n'){
        count++;
    }
    
}
console.log(count)