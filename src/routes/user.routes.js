// User Routers 

// Importing dependencies
const router = require("express").Router();
const UserController = require("../controllers/user.controller");


class UserRouter {
    constructor() {
        this.router = router;
        this.main();
    }

    main() {
        this.router.post("/", UserController.createUser);
        this.router.put("/", UserController.updateUser);
        this.router.get("/", UserController.getUser);
        this.router.put("/inactive", UserController.inActiveUser);
    }

    getInstance() {
        return this.router;
    }
}

// exports
module.exports = UserRouter;