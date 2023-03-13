const { getUsers, suspendUser } = require("../controllers/user.controller");
const { authanticateAdmin } = require("../middlewares/authanticate");

const router = require("express").Router();

router.get("/", authanticateAdmin, getUsers);
router.put("/suspend/:id", authanticateAdmin, suspendUser);

module.exports = router;
