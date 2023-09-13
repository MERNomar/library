const express = require('express')
const app = express()
const routes = require('./routes/routes')
const url = "mongodb+srv://omar:omar123@cluster0.pvkokfm.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require('mongoose')


app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(`public`))
app.set('view engine' , 'ejs')
const port = 8080

mongoose.connect(url , {useNewUrlParser : true , useUnifiedTopology : true }).then(e => {
    app.listen(port , () => {
        console.log(`listening to http://localhost:${port}`)
    })
}).catch(err => {console.log(err)})

app.use(routes)

