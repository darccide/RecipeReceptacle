const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// Route        GET api/users/test
// Description  Tests user route
// Access       Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;
