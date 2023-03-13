const bcrypt = require("bcrypt");

const password = process.env.ENCREPTION_CODE || "583jddsw83hdf";
const saltRounds = 10;

async function encrypt(text) {
  return text;
}

function decrypt(text) {
  bcrypt.compare(text, storedHash, (err, result) => {
    if (result) {
      console.log("Password is correct!");
    } else {
      console.log("Password is incorrect!");
    }
  });
}

module.exports = {
  encrypt,
  decrypt,
};
