const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();
var bodyParser = require("body-parser");
const cors = require('cors');
const dbConnect = require("./config/dbConnect");

dbConnect();
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
