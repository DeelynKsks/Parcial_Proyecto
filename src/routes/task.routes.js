const router = require('express').Router();
const { createTask, getTasks } = require('../controllers/task.controllers');
const validarJWT = require("../middlewares/validar-jwt")

//Acá tenés que validar el token

router.post('/task', [validarJWT], createTask);

router.get('/task', [validarJWT], getTasks);

module.exports = router;