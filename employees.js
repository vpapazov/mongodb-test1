let express = require('express');
let mongodb = require('mongodb');
let Database = require('./db');
let app = express();
let router = express.Router();


router.post('/', (req,res) => {
let employee = req.body;
employee._id = new mongodb.ObjectID();
Database.db.collection('employees').save(employee).then((result) => {
  res.send(result);
})
})

router.get('/', (req,res) => {
  res.send();
})




module.exports=router;
