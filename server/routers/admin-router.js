const express = require('express');
const controllers = require('../controllers/admin-controllers')
const userrefMidd = require("../middleware/userres-middleware")
const adminmiddkeware = require("../middleware/admin-middleware")
const router = express.Router();
router.get("/user", userrefMidd, adminmiddkeware, controllers.getUser)
router.get("/contact", userrefMidd, adminmiddkeware, controllers.getContact)
router.delete("/user/delete/:id", userrefMidd, adminmiddkeware, controllers.userDelete)
router.delete("/user/deletecontact/:id", userrefMidd, adminmiddkeware, controllers.userContactDelete)
router.get("/user/:id", userrefMidd, adminmiddkeware, controllers.getUserId)
router.patch("/user/update/:id", userrefMidd, adminmiddkeware, controllers.updateData)
//property data
router.get("/property")
module.exports = router

