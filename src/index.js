const express = require('express')
const app = express()
const port = 3000
const client = require('./DB/configDB')

app.use(express.json())
app.get('/', (req, res) => {
  var query = 'SELECT * FROM tutorialtable';
  client.execute(query, [], (err, a) => {
    if(err) {
      console.log('err: $' + JSON.stringify(err))
    } else {
      console.log(a.rows[0]);
      res.json({ key: a.rows[0] })
    }
    process.exit();
  }); 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


