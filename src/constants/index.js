const { config } = require('dotenv');

config()
console.log("PORT at cons: ",process.env.PORT)
module.exports = {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    CLIENT_ID: process.env.CLIENT_ID,
    SERVER_URL: process.env.SERVER_URL,
}