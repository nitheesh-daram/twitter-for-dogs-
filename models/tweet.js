const mongoose =require('mongoose')


const tweetschema=new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    tweet:{
        type:String,
        required:true
    }


})

module.exports=mongoose.model('tweet',tweetschema)