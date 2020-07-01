const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

app = express()

const sequelize = require('./utils/database')
const routes = require('./routes/display')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'static')))

app.set('views engine','pug');
app.set('views','view');

app.use(routes)

console.log('testing the server')

sequelize.sync().then(results=>{
    app.listen(3000,err=>{
        if(err){console.error(err)}
        console.log('server started at porrt 3000')
    })
})