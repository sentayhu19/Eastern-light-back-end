const { Pool } = require("pg");
const { PG_PORT, PG_DATABASE, PG_PASSWORD, PG_USER, PG_HOST  } = require("../constants");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "eastern-light",
//   password: "sentayhu19",
//   port: 5432,
// });

const pool = new Pool({
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
