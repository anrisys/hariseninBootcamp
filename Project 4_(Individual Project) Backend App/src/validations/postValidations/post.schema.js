const Joi = require("joi");

const postValidation = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Title harus diisi!",
    "string.empty": "Title tidak boleh kosong",
  }),
  body: Joi.string().required().messages({
    "any.required": "Isi post harus diisi!",
    "string.empty": "Isi tidak boleh kosong",
  }),
});

module.exports = postValidation;
