const express = require('express')
const app = express()
const PORT = 8383

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>')
})

app.get('/dashboard', (req, res) => {
    res.send("<h1>Dashboard</h1>")
})

app.get('/api/data', (req, res) => {
    res.send('data')
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))