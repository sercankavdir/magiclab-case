const Joi = require("joi");
const Validators = require("../validators");
const constants = require("../constants");

module.exports = function (validator) {
  if (!Validators.hasOwnProperty(validator)) {
    throw new Error(`'${validator}' validator is not exist!`);
  }
  return async function (req, res, next) {
    try {
      const validated = await Validators[validator].validateAsync(
        req[constants.ROUTE_DATA_SOURCE[req.path]]
      );
      req.body = validated;
      next();
    } catch (err) {
      if (err.isJoi) {
        res.status(422);
        return res.json({ message: err.message });
      }
      res.status(500);
      return res.send({ message: err.message });
    }
  };
};
