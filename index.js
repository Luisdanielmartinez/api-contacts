const express=require('express');
const bodyParser=require('body-parser');
const ContactRouter=require('./routes/contact');
const app=express();
const cors=require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     req.header('Content-Type":"application/json', '*');
//     next();
//   });
app.use('/contact',ContactRouter);

app.listen(8080,()=>{
    console.log("puerto 8080 escuchando");
});