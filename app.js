
let express = require('express');
let bodyParser = require('body-parser');
let port = 3000;
let app = express();
app.use(bodyParser.json());
let router = express.Router();
let employees = require('./employees');
let Database = require('./db');
Database.connect();

app.get('/', (req, res) => {
let list;
  Database.db.collection('employees').find().toArray().then((result) => {
    for (let i = 0; i < result.length; i++){
      if ( i = 0)
      {
         list = result[i].firstName;
      }
      else {
          list += result[i].firstName;
          }
    }
    res.send(list);
  })
})

/*
app.put('/', (req, res) => {
    Database.db.collection('employees').find().toArray().then((result) => {

      let cursor = db.coll.find(),
          i = 0;

      cursor.forEach(function(x){
          db.coll.update({_id: x._id}, {$set:{new_field:i}})
          $i++;
      });

    })
})*/



app.use('/employees', employees);

app.listen(port, function () {
  console.log('server connected');
})
