const restful = require('node-restful')
const mongoose = restful.mongoose

const schemaCredito = new mongoose.Schema({
  name: { type: String, required:true},
  value: { type: Number, min: 0, required: true}
})

const schemaDebito = new mongoose.Schema({
  name: { type: String, required:true},
  value: { type: Number, min: 0, required: true},
  status: {type: String, required: false, uppercase: true,
    enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const schemaCicloPagamento = new mongoose.Schema({
  name: {type: String, required:true},
  month: {type: Number, min: 1, max: 12, required:true},
  year: {type: Number, min: 1970, max: 2100, required:true},
  credits: [schemaCredito],
  debts: [schemaDebito]
})

module.exports = restful.model('CicloPagamento', schemaCicloPagamento)
