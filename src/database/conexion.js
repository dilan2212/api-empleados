const { Pool } = require("pg");

const realizarConexion = () => {
  try {
    const pool = new Pool({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      port: process.env.PORTBASE,
    });
    return pool;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  realizarConexion,
};
