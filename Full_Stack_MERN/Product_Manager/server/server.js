const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routeAttacher = require('./routes/product.routes');
routeAttacher(app);
app.listen(port, () => console.log(">>SERVER ONLINE"));