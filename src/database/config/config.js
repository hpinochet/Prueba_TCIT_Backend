const globalConstants = require('../../const/globalConstants');

module.exports = {
  "development": {
    "username": globalConstants.DB_USERNAME,
    "password": globalConstants.DB_PASSWORD,
    "database": globalConstants.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": globalConstants.DB_USERNAME,
    "password": globalConstants.DB_PASSWORD,
    "database": globalConstants.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": globalConstants.DB_USERNAME,
    "password": globalConstants.DB_PASSWORD,
    "database": globalConstants.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
