const express = require('express');
const cannonRouter = require('./cannon/cannon.route');
const bodyParser = require('body-parser');
const shipPartsRouter = require('./ship-parts/ship-parts.route');
const shipRouter = require('./ship/ship.route');
const app = express();
const cors = require('cors');
app.use(cors());

// Config 
    app.use( bodyParser.urlencoded({ extended: true }) )
    app.use( bodyParser.json() )

app.get('/', (req, res) => {
    res.status(200).send({
        title: 'URSS Api running!',
        status: true
    })
})


app.use('/cannon', cannonRouter)
app.use('/ship-part', shipPartsRouter)
app.use('/ship', shipRouter)

module.exports = app;