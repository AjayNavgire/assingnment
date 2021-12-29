
const express = require("express")
const app = express()
app.use(express.json())
const cors = require('cors');
app.use(cors());
const port = 3000

//require mongoDB connection
require('./configration/db')

//require routes
require('./routes/index')(app)


app.listen(port, () => {
    console.log(`Congratulation ! Server is listening on ${port}`)
})
