let express=require('express')
let app=express()
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.post('/api/login',(req,res)=>{
    console.log(req.params)
    console.log(req.body)
    console.log(req.query)

    res.send({status:req.body})
})

app.get('/api/greeting',(req,res)=>{
    res.send("hello student")
})

app.get('/api/item',(req,res)=>{
    let data={
        img:'https://rukminim2.flixcart.com/image/612/612/k3g73bk0/keyboard/desktop-keyboard/e/y/q/dell-kb-216-original-imaf8qpmu8zmqm9f.jpeg?q=70',
        prise:'300',
        rating:4,
        name:'keyboard'
    }
    res.send(data)
})


app.listen(8001,()=>{
    console.log("im working on port 8001")
})