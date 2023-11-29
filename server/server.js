require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const router = require("./routes");

const db = require('./config/connection')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/", router)


db.once('open', () => {
    app.listen(PORT, () => console.log(`Server is listening port ${PORT}`))
})