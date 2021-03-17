const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection:{
		database: 'knowledge_final',
		user:'postgres',
		password:'12345'
	},	
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
