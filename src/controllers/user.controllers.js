const User = require("../models/user.model");

const bcrypt = require ("bcrypt")

const ctrlUser = {};

ctrlUser.postUser = async (req, res) => {
    const { username, password: passwordRecibida, email } = req.body

    const newPassword = bcrypt.hashSync(passwordRecibida, 10);

    const newUser = new User({
        username,
        password: newPassword,
        email
    })

    const user = await newUser.save()

    return res.json({
        msg: "El usuario se creó correctamente",
        user
    })
}

ctrlUser.getUser = async (req, res) => {
    const usuarios = await User.find();

    return res.json(usuarios);
}

ctrlUser.updateUser = async (req, res) => {
    const userId = req.params.id

    const { username, email, isActive, role } = req.body

    const data = { username, email, isActive, role }
}

ctrlUser.deleteUser = async (req, res) => {
    
}

module.exports = ctrlUser