const router = require("express").Router()
const homeroutes = require("./homeroutes")
router.use("/",homeroutes)

module.exports = router