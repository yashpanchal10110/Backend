const express = require('express')
const app = express()

const port = 4000

app.get ( '/' , (req,res) => {res.send("hello")}  )
app.get ( '/Twitter' , (req,res) => {res.send("hello yash")}  )

app.listen(port,() => {console.log('example $ {port}')})
