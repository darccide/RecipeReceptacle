const express = require('express');
const router = express.Router();

// Route        GET api/profiles/test
// Description  Tests profile route
// Access       Public
router.get('/test', (req, res) => res.json({ msg: 'Profiles Works' }));

module.exports = router;
