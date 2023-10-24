const conexao = require('../../dados-sensiveis/conexao');
const bcrypt = require('bcrypt');

const validarLogin = (joiSchema) => async (req, res, next) => {
  try {
    await joiSchema.validateAsync(req.body);
    const { email, senha } = req.body;

    const usuario = await conexao
      .select('nome', 'email')
      .from('usuarios')
      .where({ email })
      .debug();

    if (usuario.length < 1) {
      return res.status(404).json({ mensagem: 'Usuario não encontrado' });
    }
    const senhaDB = await conexao
      .select('senha')
      .from('usuarios')
      .where({ email });

    const senhaValidada = await bcrypt.compare(senha, senhaDB);

    if (!senhaValidada) {
      return res.status(401).json({ mensagem: 'email ou senha incorretos' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = validarLogin;
