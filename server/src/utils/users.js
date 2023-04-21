require("dotenv").config();
const {PASSWORD} = process.env
const users = [{ email: "ubeimarorrego@gmail.com", password: PASSWORD }];
module.exports = users;