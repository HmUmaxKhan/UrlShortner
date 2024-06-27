const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
    shortId: {
        type:String,
        required:true,
        unique:true
    },
    urlRedirect:{
        type:String,
        required:true
    },
    history:[{
        visit:{
            type:Date
        }
    }],
})

const UrlShort = mongoose.model('UrlShort',urlSchema)

module.exports = UrlShort