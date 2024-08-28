const express = require('express');
const connectDB = require('./db');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const urlRouter = require('./routes/url.router');
const app = express();
const PORT = 3000;
app.use(express.json());

connectDB();


app.use('/',urlRouter);


app.listen(PORT, () => console.log('Server is running on PORT  ' + PORT));
