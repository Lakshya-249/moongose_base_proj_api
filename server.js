const { urlencoded } = require("body-parser");
const express = require("express");

const app = express();
const router = require("./router");

const port = 5000;

app.use(express.urlencoded({extended:false}));

app.use(express.json());


app.use("/user",router);

app.listen(port,()=>{
    console.log("server running...");
})