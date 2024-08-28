const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: String,
    redirectUrl: String
});

const URL = mongoose.model('User', urlSchema);

module.exports = URL;