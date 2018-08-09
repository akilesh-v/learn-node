var file=require("fs");

// Asynchronous read
file.readFile('read.txt',function(err,data){
    if(err){
        console.log("There is an Error in the File Reading"+err);
    }
    console.log("Reading in Ascync Read :" +data.toString());
});

//Synchronous read
var data= file.readFileSync('read.txt');

console.log("The synchronous was readed"+ data.toString());

console.log("End of Program");
