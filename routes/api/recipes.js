const express = require('express');
const router = express.Router();

// Route        GET api/recipes/test
// Description  Tests recipe route
// Access       Public
router.get('/test', (req, res) => res.json({ msg: 'Recipes Works' }));

module.exports = router;
