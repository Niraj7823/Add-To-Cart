const express = require('express');
const router = express.Router();
const controllers = require('../controllers/auth-controllers')
const validate = require("../middleware/validators-middleware")
const { signUpSchema, loginSchema } = require("../validators/auth-validators");
const userrefMidd = require("../middleware/userres-middleware")
router.get('/', controllers.home);

router.post('/registor', validate(signUpSchema), controllers.registor);
router.post('/login', validate(loginSchema), controllers.login);
router.post('/about', controllers.contact);
router.get('/userres', userrefMidd, controllers.userres);
module.exports = router 
