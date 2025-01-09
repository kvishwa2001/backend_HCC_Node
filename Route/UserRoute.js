const express = require ("express")

const UserController = require ("../Controller/UserController")
const {verifytoken,adminonly} = require ("../Middleware/AuthMiddleware")
 
const router = express.Router()

router.post ("/signup",UserController.createUser)
router.post("/login",UserController.loginUser)
router.get("/list",UserController.list)
router.delete("/delete/:id",UserController.delete)
router.put("/updated/:id",UserController.update)

router.get("/fetchUserlistID",UserController.fetchUserID)

router.get("/fetchUserlistIDS/:id",UserController.fetchUserIDS)





module.exports = router;