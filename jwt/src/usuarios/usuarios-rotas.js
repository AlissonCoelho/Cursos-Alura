const usuariosControlador = require('./usuarios-controlador');
const middlewaresAutenticacao = require('./middlewares-autenticacao');

module.exports = app => {
  app
      .route('/usuario/login')
      //Configirado passport estrategia local e sem seções passport.authenticate('local', {session : false}),
      .post(middlewaresAutenticacao.local, usuariosControlador.login);
  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app
    .route('/usuario/:id')
    .delete(middlewaresAutenticacao.bearer, usuariosControlador.deleta);
};
