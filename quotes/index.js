const express = require("express");
const {randomQuote,randomTen} = require("./handler");

const app = express();

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin","*");
    next();
});

app.get("/quotes/random", (req,res) =>{
    res.json(randomQuote());
});

app.get("/quotes/ten", (req,res) =>{
    res.json(randomTen());
});

app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        type: "error",
        message: err.message
    })
})

const PORT = 3005;
app.listen(PORT, ()=>{
    console.log("Server started on port "+ PORT);
})
