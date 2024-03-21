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
app.listen(8001,()=>{
    console.log("im working on port 8001")
})