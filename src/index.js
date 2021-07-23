const express = require('express')
const app = express()
const port = 80
 
app.use(express.json())
app.get('/', (req, res) => {
 res.send({message: 'Hello World! '})
})
 
app.listen(port, () => {
 console.log(`Example app listening at port: ${port}`)
})