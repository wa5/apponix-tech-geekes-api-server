let express=require('express')
let app=express()
var cors = require('cors')
app.use(cors())
app.get('/api/login',(req,res)=>{
    res.send("working")
})
app.listen(8001,()=>{
    console.log("im working on port 8001")
})