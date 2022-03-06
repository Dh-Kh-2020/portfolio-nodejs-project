const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const connectDB = require('./DB/connection');

const app = express();
dotenv.config({path: 'config.env'})

//log http request
// tiny >> The minimal output. :method :url :status :res[content-length] - :response-time ms
app.use(morgan('tiny'));

connectDB();

// parses incoming request bodies in a middleware before handlers, available under the req.body property.
// parse requests of content-type - application/json
app.use(bodyparser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended: false}))

//set view engine
app.set('view engine','ejs')

//load folders in public folder
app.use(express.static('public'))

// loading routes
app.use('/', require('./routes/router'))

// set port, listen for requests
const PORT = process.env.PORT || 9191;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});