const mongoose = require('mongoose')

const connectMongoDB = async()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/ShortUrl?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6")
    .then(()=>{console.log("Db is connected");})
    .catch((err)=>{console.log("Error: ",err)})
}

module.exports = {connectMongoDB}