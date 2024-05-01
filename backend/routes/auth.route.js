const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) =>{
          res.send("<h1>signup</h1>");
})
router.post('/login');

module.exports = router;