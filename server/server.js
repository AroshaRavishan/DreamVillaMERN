//import modules
import express from 'express';
import dotenv from 'dotenv';

//cookie parser
import cookieParser from 'cookie-parser';

//configure dotenv
dotenv.config();

//import database
import connectDB from './config/db.js';

//connect to database
connectDB();

//create express app
const app = express();

//configure express to accept json data in the body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configure cookie parser
app.use(cookieParser());

//define port
const port = process.env.PORT || 5000;

//define a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});


//listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
