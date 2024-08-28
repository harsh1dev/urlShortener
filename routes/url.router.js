const express = require('express');
const {createShortURL,redirectToUrl} = require('../controllers/url.controllers');

const router = express.Router();

router.post('/url', createShortURL);

router.get('/:shortId', redirectToUrl);

module.exports = router; 