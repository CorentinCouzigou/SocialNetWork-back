const express = require('express');
require('dotenv').config();
const MongoDBClient = require('./data/db.config');
const app = express();
const PORT = process.env.PORT || 3000;
require('./data/db.config');





app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
    MongoDBClient.initialize();
})