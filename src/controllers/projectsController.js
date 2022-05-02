const Project = require('../models/Project');

const getProjects = async(req, res) => {
    const projects = await Project.findAll();
    res.json(projects);
}

const getProject = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findOne({
            where: { id }
        });
        res.json(project);
    } catch (error) {
        res.json({ message: error });
    }
}

const createProject = async (req, res) => {   
    const { name, diagramObject, uid, username } = req.body;
    const newProject = {
        name,
        diagramObject,
        uid,
        username
    }
    try {
        const project = await Project.create(newProject);
        res.json(project);
    } catch (error) {
        res.json({ message: error });
    } 
}

const updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, diagramObject, uid, username } = req.body;
    const updateProject = {
        name,
        diagramObject,
        uid,
        username
    }
    try {
        const project = await Project.update(updateProject, {
            where: { id }
        });
        res.json(project);
    } catch (error) {
        res.json({ message: error });
    }
}

const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.destroy({
            where: { id }
        });
        res.json(project);
    } catch (error) {
        res.json({ message: error });
    }
}

const getProjectsByUid = async (req, res) => {
    const { uid } = req.params;
    try {
        const projects = await Project.findAll({
            where: { uid }
        });
        res.json(projects);
    } catch (error) {
        res.json({ message: error }); 
    }
}

const updateProjectName = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updateProject = {
        name
    }
    try {
        const project = await Project.update(updateProject, {
            where: { id }
        });
        res.json(project);
    } catch (error) {
        res.json({ message: error });
    }
}


module.exports = {getProjects, getProject, createProject, updateProject, deleteProject, getProjectsByUid, updateProjectName};