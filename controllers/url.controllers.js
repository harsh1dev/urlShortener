const URL = require('../models/url');


function generateId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

exports.createShortURL =  (req, res) => {
    const url = req.body.url;
    let shortID = generateId();
    let obj = {
        shortId: shortID,
        redirectUrl: url
    }
    URL.create(obj);
    console.log("done")
    res.json({ url: shortID });
}

exports.redirectToUrl =   async (req, res) => {
    const shortID = req.params.shortId;
    console.log(shortID);
    const entry = await URL.findOne({ shortId: shortID });
    console.log(entry.redirectUrl);
    res.redirect(entry.redirectUrl);

}