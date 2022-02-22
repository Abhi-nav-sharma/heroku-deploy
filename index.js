const express= require('express')
const res = require('express/lib/response')
const app= express()
const port=process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('Hello World 2!')
})

app.listen(port,()=>{
    console.log('Server is running on port',port)
})