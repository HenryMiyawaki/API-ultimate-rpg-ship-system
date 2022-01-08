'use strict'

const app = require('../src/app');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });

// warning
const PORT =            process.env.PORT    || 8081;
const DB_NAME =         process.env.DB_NAME || 'redirectDb';
const DB_PORT =         process.env.DB_PORT || 27017;

const DATABASE_URL =    `mongodb://localhost:${DB_PORT}/${DB_NAME}`;

app.use(cors());
app.listen(PORT, async () => {

    await mongoose.connect(DATABASE_URL).catch((e) => { console.log(e) })
    console.log(`Server running on port ${PORT}`);

})