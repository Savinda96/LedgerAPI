
//The main sever

const express =require('express');
const app = express();
const port = 3000;

app.use('/ledger',require('./ledger.controller')); //Requests come to /ledger path forwarded to controller
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })