const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const tweet=require('./models/tweet')

mongoose.connect('mongodb://127.0.0.1 /twitter', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));



app.get('/', async(req, res) => {
    const data=await tweet.find()
     res.render('index',{data:data})
})

app.post('/', async(req, res) => {
    req.datas=new tweet()
    let datas=req.datas
    datas.name=req.body.name
    datas.tweet=req.body.tweet
    datas=await datas.save()
    // console.log(data)
    const data=await tweet.find()
    res.render('index',{data:data})
})


app.listen(5000, () => {
    console.log('listening')
})