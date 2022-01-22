const fs=require('fs');

fs.writeFile("async.txt",'async call',()=>{
    console.log("complted");
});