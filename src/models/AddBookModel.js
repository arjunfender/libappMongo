var mongoose = require('mongoose');

var addbookmodel = mongoose.model('addbook',{
    title : String,
    genere: String,
    author: String,
    image :String,
    content:String
})//creating objest for model('collection',{input type collection})

module.exports = {addbookmodel};
