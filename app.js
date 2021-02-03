const express = require("express")

const PORT = process.env.PORT || 3000
const app = express()

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log("Server is up on port", PORT)
})
