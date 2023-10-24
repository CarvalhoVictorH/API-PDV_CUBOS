const bcrypt = require('bcrypt');
const conexao = require('../../dados-sensiveis/conexao');

const cadastrarUsuario = async (req, res) => {
  const { senha } = req.body;

  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    await conexao('usuario').insert({ senha: senhaCriptografada });

    return res.json();
  } catch (error) {
    return res.json({ mensagem: `${error.message}` });
  }
};

module.exports = cadastrarUsuario;
