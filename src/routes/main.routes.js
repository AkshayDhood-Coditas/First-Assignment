// Main Routers 

// Importing dependencies
const router = require("express").Router();
const UserRouter = require("./user.routes");
const GroupRouter = require("./group.routes");
const ProjectRouter = require("./project.routes");


class MainRouter {
    constructor() {
        this.router = router;
        this.main();
    }

    main() {
        this.router.use("/user", new UserRouter().getInstance());
        this.router.use("/group", new GroupRouter().getInstance());
        this.router.use("/project", new ProjectRouter().getInstance());

        // Home Route
        this.router.use("/", (_req, res) => res.redirect("/api/explorer"));

        // Unknown Routes
        this.router.use("*", (_req, res) => res.status(404).json({ message: "Unknown Route! :(" }));
    }

    getInstance() {
        return this.router;
    }
}

// exports
module.exports = MainRouter;