const { Router } = require('express');
const calc = require('./calc');

const router = Router();

router.use('/calc', calc);

module.exports = router;
