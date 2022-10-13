const router = require('express').Router();
const { createTask, getTasks } = require('../controllers/task.controllers');

//Acá tenés que validar el token

router.post('/task', createTask);

router.get('/task', getTasks);

module.exports = router;