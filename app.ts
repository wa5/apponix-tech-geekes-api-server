let express=require('express')
let app=express()
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.post('/api/login',(req:any,res:any)=>{
    let data={
        name:'vibhav',
        email:'v@gmail.com',
        password:'1234'
    }

if(req.body.password==data.password && req.body.email==data.email){
    res.send({user:'exits',data})
}else{
    res.send({user:'do not exits'})
}
})

app.get('/api/greeting',(req:any,res:any)=>{
    res.send("hello student")
})

app.get('/api/item',(req:any,res:any)=>{
    let data={
        img:'https://rukminim2.flixcart.com/image/612/612/k3g73bk0/keyboard/desktop-keyboard/e/y/q/dell-kb-216-original-imaf8qpmu8zmqm9f.jpeg?q=70',
        prise:'300',
        rating:4,
        name:'keyboard'
    }
    res.send(data)
})

app.get('/api/manojll',(req:any,res:any)=>{
    res.send("skyline group hi")
})


app.listen(8001,()=>{
    console.log("im working on port 8001")
})