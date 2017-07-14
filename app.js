
let express = require('express');
let bodyParser = require('body-parser');
let port = 3000;
let app = express();
app.use(bodyParser.json());
let router = express.Router();
let employees = require('./employees');
let Database = require('./db');
Database.connect();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
})


app.use('/employees', employees);

app.listen(port, function () {
  console.log('server connected');
})
