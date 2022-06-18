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

router.get('/book/:id',(req,res)=> {
    const id = req.params.id
    let sql = `SELECT * FROM dolcove.programs WHERE id = ${id}`
    let query = DB.query(sql, (err, result) =>{
        if (err) throw err
        res.send('this bookings page is for ' + id)
    
    })
})
module.exports = router
