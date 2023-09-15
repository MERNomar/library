require('dotenv').config();
const express = require('express')
const app = express()
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')


app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(`public`))
app.set('view engine' , 'ejs')
const port = process.env.PORT
const url = process.env.MONGODB_CONNECT_URL

app.get('/cookie' , (req , res) => {
    res.setHeader('Set-Cookie' , 'ahmed=thing')
    res.cookie('omar' , true)
    res.send('you have a cookie now')
})


mongoose.connect(url , {useNewUrlParser : true , useUnifiedTopology : true }).then(e => {
    app.listen(port , () => {
        console.log(`listening to http://localhost:${port}`)
    })
}).catch(err => {console.log(err)})

app.use(routes)

