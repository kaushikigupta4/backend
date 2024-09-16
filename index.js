const express= require('express');
const app= express();
const port= 3000;
require("dotenv").config();

app.get('/', (req,resp)=>{
    resp.send("Hello World")
})
app.get('/twitter', (req,resp)=>{
    resp.send("Hello World Twitter")
})
app.listen(process.env.PORT,()=>{
    console.log("App listening on port",process.env.PORT)
}
)