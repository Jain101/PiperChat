const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, zain, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;