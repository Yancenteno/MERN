const express = require('express')
const app = express()
const port = 8000

require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const routeAttacher = require('./routes/users.routes')

routeAttacher(app)





app.listen(port, () => console.log(process.env.MY_VARIABLE))