const express = require('express')

module.exports = function(server){
  //API rotas

  const router = express.Router()
  server.use('/api', router)

  //rotas da api

  const cicloPagamentoServices = require('../api/cicloPagamento/cicloPagamentoServices')
  cicloPagamentoServices.register(router, '/cicloPagamentos')
  
}
