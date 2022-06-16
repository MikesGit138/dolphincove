const mysql = require('mysql')
require('dotenv').config()

const DB = mysql.createConnection({
	host: process.env.DB_HOST || 'localhost',
	port: process.env.DB_PORT || 3306,
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASS || 'root',
	database: process.env.DB_NAME || 'dolcove',
	dateStrings: true,
	multipleStatements: true,
})

console.log('Waiting for database connection...')
DB.connect((err) => {
	if (err) throw err

	console.log('Database Connected!')
})

module.exports = DB
