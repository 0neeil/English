const Router = require( "express" )
const router = Router()
const controller = require("./user_controller")
const authMiddleware = require("../middleware/auth_middleware")

router.get("/user/:id", controller.getUserByid)
router.put("/updateinform/:id", controller.updateUserInform)
router.post("/addword/:id", controller.addNewWord)

module.exports = router