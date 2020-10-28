const { Router } = require('express');
const validate = require('express-validation');
const validations = require('../validation/calc');
const calc = require('../controllers/calc');

const router = Router();

router.get('/:x/:operation/:y', validate(validations.evaluate), calc.evaluate);

module.exports = router;
