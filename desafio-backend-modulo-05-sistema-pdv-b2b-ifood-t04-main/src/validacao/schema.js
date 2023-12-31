const joi = require('joi');

const schemaEmailSenha = joi.object({
  email: joi.string().email().required().messages({
    'string.email': 'O campo email precisa ter um formato válido',
    'any.required': 'O campo email é obrigatório',
    'string.empty': 'O campo email é obrigatório',
  }),
  senha: joi.string().min(8).required().messages({
    'any.required': 'O campo senha é obrigatório',
    'string.empty': 'O campo senha é obrigatório',
    'string.min': 'A senha precisa conter, no mínimo, 8 caracteres',
  }),
});

module.exports = {
  schemaEmailSenha,
};
