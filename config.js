/** Common config for message.ly */

// read .env files and make environmental variables

require("dotenv").config();

const USERNAME = 'USERNAME'
const PASSWORD = 'PASSWORD'

const DB_URI = (process.env.NODE_ENV === "test")
  ? `postgresql://${USERNAME}:${PASSWORD}@localhost:5432/messagely-test`
  : `postgresql://${USERNAME}:${PASSWORD}@localhost:5432/messagely`;

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};