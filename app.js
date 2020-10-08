const express = require('express');
const app = express();
const sequelize = require('./database/db');

// setting
const port = process.env.port || 3000;

//middleware (para llenar el req.body)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.get('/', (req, res) => {
  res.json('hola mundo');
});

app.use('/product', require('./routes/product'));
//servidor
app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);

  //conector a la base de datos
  // force true: DROP TABLES
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log('nos hemos conectado a la base de datos');
    })
    .catch((error) => {
      console.log('se ha producido un error', error);
    });
});
