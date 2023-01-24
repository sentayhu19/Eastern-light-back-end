const { Pool } =  require('pg')

const pool = new Pool ({
    user:'postgres',
    host: 'localhost',
    database: 'eastern-light',
    password: 'sentayhu19',
    port: 5432,
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}