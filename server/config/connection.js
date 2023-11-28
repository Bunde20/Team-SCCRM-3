const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURI || 'mongodb://localhost:27017/SCCRM-3')

module.exports = mongoose.connection;