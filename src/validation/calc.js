const Joi = require('joi');

module.exports = {
  evaluate: {
    params: {
      x: Joi.number().required(),
      operation: Joi.string().required().allow(...['plus', 'minus', 'multiply', 'divide']),
      y: Joi.number().required(),
    },
  },
};
