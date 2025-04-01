const { error } = require('console');
const f= require('fs');
f.writeFile("Clg/xyz.txt",'This is dummy text for testing',
    function(error){
    if(error) throw error;
    console.log('file created');
});