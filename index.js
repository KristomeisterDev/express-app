const express = require('express') 
const ejs = require('ejs')

const app = express()
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/static/contact.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/static/about.html')
})


app.get('/welcome-web', (req, res) => {
    res.render('welcome-web')
})

app.get('/singin', (req, res) => {
    res.render('singin')
})

app.use(express.static('public'))

app.listen(3000)
console.log('server on port 3000')
