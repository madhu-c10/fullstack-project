const express = require('express');
const router = express.Router();
const Task = require('../modules/schema');

router.get('/',(req,res)=>{
   res.send(Task.find())
})

module.exports = router;