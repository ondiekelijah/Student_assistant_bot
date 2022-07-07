// Create a nodejs server
require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const dialogRoutes = require('./routes/routes');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', dialogRoutes);


app.listen(port, () => {
    console.log(`Server Up on ${port}`);
    }
);

