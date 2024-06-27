const express = require('express');
const { connectMongoDB } = require('./connection');
const app = express()
const port = 8000

app.use(express.json())

connectMongoDB()

app.listen(port,()=>{
    console.log(`${port} is the port connected`);
})