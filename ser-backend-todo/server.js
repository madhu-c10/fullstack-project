const express = require("express");
const app = express();
const path = require("path");
const router = require("./routs/routing");
require('./modules/db')

const PORT = process.env.PORT || 3500 ;

app.use('/back-end',router)

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})