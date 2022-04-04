const express = require('express')
const requests = require('requests')
const app = express()
const port = 3000

app.set('views','../views')
app.set('view engine','hbs')
// app.get('',(req,res)=>{
//     res.render('index')
// })
// app.use(express.static("../public"))
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/home', (req, res) => {
   res.render('index',{
       param:"sent from server"
   })
})
app.get('/weather',(req,res)=>{
    requests(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&units=metric&appid=f3b9dce3502cfa05b6846e2a9a80a0cd`
      )
        .on("data", (chunk) => {
          const objdata = JSON.parse(chunk);
          const arrData = [objdata];
          console.log(arrData[0]);
          res.write(`Temp is ${arrData[0].main.temp}`);
        })
        .on("end", (err) => {
          if (err) return console.log("connection closed due to errors", err);
          res.end();
        });
})
app.get('*',(req,res)=>res.send("Page not found 404"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))