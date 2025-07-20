const express = require('express');
const router = express.Router();
const { getHome, getAZList } = require('../controllers/hianimeController');

router.get('/home', getHome);
router.get('/azlist/all', getAZList);

module.exports = router;