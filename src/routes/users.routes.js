const { Router } = require("express");
const router = Router();

const UserController = require("../controllers/usersController");

router.get('/users', UserController.getUsers);

router.post('/users', UserController.createUser);

router.put('/users/:id', UserController.updateUser);

router.delete('/users/:id', UserController.deleteUser);

router.get('/users/:id', UserController.getUser);

router.get('/users/:id/projects', UserController.getUserProjects);

module.exports = router;