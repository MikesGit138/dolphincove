const port = 5000
const express = require('express')
const server = express()

const mysql = require('mysql')
const connection = require('./database/db')

server.listen(port)