const router = require("express").Router()

router.get("/",(req,res) => {
    //grab info from database
    res.render("login")
})
module.exports = router