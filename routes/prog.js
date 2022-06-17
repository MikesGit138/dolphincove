const express = require('express')
const router = express.Router()


router.get('/programs', (req,res)=>{
	res.render('prog', {title: 'Programs'})
})
module.exports = router
