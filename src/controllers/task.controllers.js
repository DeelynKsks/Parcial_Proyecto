const Tasks = require('../models/task.model');
ctrlTask = {};

ctrlTask.createTask = async (req, res) => {
    const identificador = req.user._id

    const { titulo, descripcion } = req.body;

    const task = new Tasks({
        titulo,
        descripcion,
        userId: identificador
    });

    try {
        const newTask = await task.save();

        return res.json({
            msg: 'Tarea creada correctamente',
            newTask
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Error al crear la tarea'
        })
    }
}

ctrlTask.getTasks = async (req, res) => {
    userId = req.user._id

    const tasks = await Tasks.find({ userId: userId })
    .populate('userId', ['username','email'])

    return res.json(tasks);
}


module.exports = ctrlTask;