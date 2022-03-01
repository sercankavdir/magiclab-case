const Joi = require("joi");

const readDataSchema = Joi.object({
  id: Joi.number().required(),
});

module.exports = readDataSchema;
