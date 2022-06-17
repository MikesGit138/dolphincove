const express = require('express')
const router = express.Router()

const DB = require('../lib/db')

router.get('/programs', (req,res)=>{
  let sql = 'SELECT * FROM dolcove.programs'
	let query = DB.query(sql, (err, rows)=>{
	  res.render('prog', {
		title: 'Programs',
		programs: rows
	})
		
	})
})
module.exports = router
