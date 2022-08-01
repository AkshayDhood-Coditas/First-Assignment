// Project Routers 

// Importing dependencies
const router = require("express").Router();
const ProjectController = require("../controllers/project.controller");

class MainRouter {
    constructor() {
        this.router = router;
        this.main();
    }

    main() {
        this.router.post("/", ProjectController.createProject);
        this.router.put("/", ProjectController.updateProject);
        this.router.get("/", ProjectController.getProject);
    }

    getInstance() {
        return this.router;
    }
}

// exports
module.exports = MainRouter;