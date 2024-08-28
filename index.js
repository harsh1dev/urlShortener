const express = require('express');
const connectDB = require('./db');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
app.use(express.json());

connectDB();

const urlSchema = new mongoose.Schema({
    shortId: String,
    redirectUrl: String
});

const URL = mongoose.model('User', urlSchema);

function generateId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}


app.post('/url', (req, res) => {
    const url = req.body.url;
    let shortID = generateId();
    let obj = {
        shortId: shortID,
        redirectUrl: url
    }
    URL.create(obj);
    res.json({ url: shortID });
});
app.get('/:shortId', async (req, res) => {

    const shortID = req.params.shortId;
    console.log(shortID);
    const entry = await URL.findOne({ shortId: shortID });
    console.log('entry found:', entry);
     res.redirect('https://www.google.com');

})













app.listen(PORT, () => console.log('Server is running on PORT  ' + PORT));





// 1. api will be of post to give the url   ->post
// 2. api will redirect to the main url
// 3. analytics url