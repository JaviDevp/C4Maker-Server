const { Router } = require("express");
const router = Router();

const ProjectController = require("../controllers/projectsController");

//obtener todos los proyectos
router.get("/projects", ProjectController.getProjects);

//obtener un proyecto
router.get("/projects/:id", ProjectController.getProject);

//crear un proyecto
router.post("/projects", ProjectController.createProject);

//actualizar un proyecto
router.put("/projects/:id", ProjectController.updateProject);

//eliminar un proyecto
router.delete("/projects/:id", ProjectController.deleteProject);

//obtener los proyectos de un usuario by uid
router.get("/projects/:uid/projects", ProjectController.getProjectsByUid);

//actualizar el nombre del proyecto
router.put("/projects/:id/name", ProjectController.updateProjectName);

router.get("/prueba", ProjectController.projectPrueba);
module.exports = router;
