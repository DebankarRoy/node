const fs=require('fs');

// fs.mkdirSync('./crud');

fs.writeFileSync('./crud/hello.txt',"hello world");

fs.appendFileSync('hello.txt',"\n2nd line");

const data=fs.readFileSync("hello.txt","UTF-8");

console.log(data);
