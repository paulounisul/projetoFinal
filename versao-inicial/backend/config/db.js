const config = require('../knexfile.js')
const knex = require('knex')(config)

//usar aqui,, mais lembrar que quando o sistema crescer pode ser um problema,
//estudar alternativas.
knex.migrate.latest([config])

module.exports = knex
