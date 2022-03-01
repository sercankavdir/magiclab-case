const Joi = require("joi");
const saveData = Joi.object({
  id: Joi.number().required(),
  gold: Joi.number().required(),
  diamond: Joi.number().required(),
  username: Joi.string().required(),
});
