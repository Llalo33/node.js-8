const express = require('express')

const app = express()

const porter = 4000

app.use(require('./routes/routs.brands'))
app.use(require('./routes/routs.products'))


app.listen(porter, () => {
    console.log(`welcome to http://localhost:${porter}`)
})