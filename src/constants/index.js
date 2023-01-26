const { config } = require('dotenv');

config()
console.log("PORT at cons: ",process.env.PORT)
module.exports = {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    CLIENT_URL: process.env.CLIENT_URL,
    SERVER_URL: process.env.SERVER_URL,
}