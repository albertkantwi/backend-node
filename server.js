const express = require('express')
const app = express()
const PORT = 8383

app.get('/', (req, res) => {
    console.log('I hit an end point', req.method)
    res.sendStatus(200)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))