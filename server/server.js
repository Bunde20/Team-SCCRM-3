require("dotenv").config();

const cookieParser = require('cookie-parser')
const express = require("express");
const app = express();
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 3000;
const router = require("./routes");

const db = require('./config/connection')
app.use(cookieParser())
// app.use((req, res, next) => {
//     // Iterate over all cookies and clear them so users dont "stay logged in"
//     const cookies = Object.keys(req.cookies);
//     cookies.forEach((cookieName) => {
//         res.clearCookie(cookieName);
//     });

//     next();
// });
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/", router)

app.use(express.static(path.join(__dirname, '../client/dist')))

db.once('open', () => {
    app.listen(PORT, () => console.log(`Server is listening port ${PORT}`))
})