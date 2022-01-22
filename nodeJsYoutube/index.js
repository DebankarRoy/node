const fs=require('fs');

fs.writeFileSync('hello.txt',"hello world");

fs.appendFileSync('hello.txt',"\n2nd line");

const data=fs.readFileSync("hello.txt");

console.log(data.toString());