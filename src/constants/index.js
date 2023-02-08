const { config } = require('dotenv');

config()
module.exports = {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    CLIENT_URL: process.env.CLIENT_URL,
    SERVER_URL: process.env.SERVER_URL,

    PG_HOST: process.env.HOST,
    PG_USER: process.env.USER,
    PG_PASSWORD: process.env.PASSWORD,
    PG_DATABASE: process.env.DATABASE,
    PG_PORT: process.env.PG_PORT,

}