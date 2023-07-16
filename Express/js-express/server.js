const express = require('express')
const app = express()
const port = 8000

require('dotenv').config()

require('./config/mongoose.config')




app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const routeAttacher = require('./routes/users.routes')

routeAttacher(app)





app.listen(port, () => console.log(">>SERVER ONLINE"))