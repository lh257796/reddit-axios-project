const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors')

app.use(cors())

app.use((err, req, res, next)=> {
    console.log(err);
    res.status(500).send(err);
  });


app.listen(3000, console.log('listening to port 3000'))
