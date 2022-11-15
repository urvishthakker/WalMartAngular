// import dt from './walmart_sample.json'
var dt = require('./walmart_sample.json')
const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
var path = require('path');
// const fs = require('fs');


const app = express()
const port = 3000;

app.use(cors())

var api_google = "AIzaSyCUSkF-QnG2TaK4v3sIXnG9tblVgxEWrL8";

app.get('/inloc/:val', async function (request, result) {
    // const ans = await res.json();
    var location = request.params.val;
    // console.log(dt[location])
    result.json(dt[location]);
 })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})