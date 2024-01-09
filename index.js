require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(" world")
})

app.get("/google", (req, res) => {
    res.send("abhishekdotcom");
})

app.get("/youtube", (req, res) => {
    res.send("cgai aur code")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
})
