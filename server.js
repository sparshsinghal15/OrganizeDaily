const express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello')
})

port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server has started on port ${port}`)
})