const express = require('express');
const rota = express.Router();
const { schemaEmailSenha } = require('./validacao/schema');
const intermediarios = require('./intermediarios/exportar-intermediarios');
const controladores = require('./controladores/exportar-controladores');

rota.post(
  '/login',
  intermediarios.validarLogin(schemaEmailSenha),
  controladores.loginUsuario
);
rota.use(intermediarios.validacaoToken);

module.exports = rota;
