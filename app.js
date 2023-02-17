const express = require("express");
const fakeDB = require("./fakeDB");
const router = require("./routes");
const morgan = require("morgan");

const app = express();
app.use(express.json());


app.use(morgan('dev'))

app.use('/', router)

app.use('/items', router)

app.use('/items/:name', router)







app.listen(3000, function () {
  console.log("App on port 3000");
  console.log('http://localhost:3000/');
});
