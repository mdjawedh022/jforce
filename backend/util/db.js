const mongoose = require('mongoose');
require('dotenv').config()
const connnection= mongoose.connect(process.env.url)

module.exports=connnection;