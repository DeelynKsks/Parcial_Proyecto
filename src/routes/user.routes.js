const router = require('express').Router();

const {
    getUser,
    postUser,
    updateUser,
    deleteUser
} = require("../controllers/user.controllers")

router.get("/user", getUser)
router.post("/user", postUser)
router.put("/user:id", updateUser)
router.delete("/user/:id", deleteUser)

module.exports = router;