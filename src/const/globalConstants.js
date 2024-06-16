require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 5000,
    ENVIROMENT: process.env.ENVIROMENT || 'development',
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
}