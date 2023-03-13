const { postUser } = require("../controllers/user.controller");
const { logIn } = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/signIn", postUser);
router.post("/logIn", logIn);

module.exports = router;
