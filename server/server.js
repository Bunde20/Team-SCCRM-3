require("dotenv").config();

const express = require("express");
const app = express();
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 3000;
const router = require("./routes");

const db = require('./config/connection')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/", router)

app.use(express.static(path.join(__dirname, '../client/dist')))

db.once('open', () => {
    app.listen(PORT, () => console.log(`Server is listening port ${PORT}`))
})