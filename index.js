const express = require('express') 

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/static/contact.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/static/about.html')
})

app.use(express.static('public'))

app.listen(3000)
console.log('server on port 3000')
