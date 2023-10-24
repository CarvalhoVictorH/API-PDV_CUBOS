//arquivo dedicado a requisitar e exportar intermediarios
const validarLogin = require('./usuario/validar-login');
const validacaoToken = require('./usuario/validar-token');

const intermediarios = {
  validarLogin,
  validacaoToken,
};

module.exports = intermediarios;
