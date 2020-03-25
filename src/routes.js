const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
  const body = req.body;

  console.log(body);

  return res.json({
    evento: 'semana OminiStack 11.0',
    aluno: 'Pedro Soares'
  });
});

module.exports = routes;