const express = require('express');
const routerRegister = require('./routerRegister');
const database = require('./database');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;
const conn = process.env.MONGO_DB;

app.boot = function (mapping) {
  database.connect(conn, (err) => {
    if (err) {
      return console.log(`Erro during database connection: ${err.message}`);
    }
    routerRegister(this, mapping);
    this.listen(port, (err) => {
      if (err) {
        return console.log(`Error on service boot: ${err.message}`);
      }
      console.log(`Service started at: http://localhost:${port}`);
    });
  });
};

module.exports = app;
