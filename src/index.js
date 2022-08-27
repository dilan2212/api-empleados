const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routers
app.use("/api/empleados", require("./routers/empleado"));
app.use("/api/departamentos", require("./routers/departamento"));

app.listen(1234, () => {
  console.log('servidor iniciado en el puerto 1234');
});
