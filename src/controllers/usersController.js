const User = require('../models/User');

const getUsers = async(req, res) => {
    const users = await User.findAll();
    res.json(users);
}

const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            where: { id }
        });
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }
}

const createUser = async (req, res) => {
    const { uid, name } = req.body;
    const newUser = {
        uid,
        name
    }
    try {
        const user = await User.create(newUser);
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }
}

const getUserProjects = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            where: { id }
        });
        const projects = await user.getProjects();
        res.json(projects);
    } catch (error) {
        res.json({ message: error });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { uid, name } = req.body;
    const updateUser = {
        uid,
        name
    }
    try {
        const user = await User.update(updateUser, {
            where: { id }
        });
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.destroy({
            where: { id }
        });
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser, getUserProjects };
