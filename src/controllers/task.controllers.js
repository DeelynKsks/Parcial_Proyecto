const Tasks = require('../models/task.model');
ctrlTask = {};

// Me faltan el update y el delete

ctrlTask.createTask = async (req, res) => {
    const { titulo, descripcion } = req.body;

    const task = new Tasks({
        titulo,
        descripcion,
        //userId: req.user._id
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
    const tasks = await Tasks.find({ userId: req.user._id })
    .populate('userId', ['username','email'])
    return res.json(tasks);
}


module.exports = ctrlTask;