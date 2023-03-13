const bcrypt = require("bcrypt");

async function decrept() {
  const hash = await bcrypt.hash("Oussama 123", 10);
  console.log(hash);
}

decrept();
