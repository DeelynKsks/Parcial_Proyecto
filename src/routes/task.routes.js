const router = require('express').Router();
const { createTask, getTask, updateTask, deleteTask } = require('../controllers/task.controllers');
const validarJWT = require("../middlewares/validar-jwt")

//Acá tenés que validar el token

router.post('/task', [validarJWT], createTask);

router.get('/task', [validarJWT], getTask);

router.put('/task/:id', [validarJWT], updateTask);

router.delete('/task/:id', [validarJWT], deleteTask);


module.exports = router;