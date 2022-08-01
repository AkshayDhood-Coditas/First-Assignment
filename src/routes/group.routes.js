// Group Routers 

// Importing dependencies
const router = require("express").Router();
const GroupController = require("../controllers/group.controller");


class GroupRouter {
    constructor() {
        this.router = router;
        this.main();
    }

    main() {
        this.router.post("/", GroupController.createGroup);
        this.router.put("/", GroupController.updateGroup);
        this.router.get("/", GroupController.getGroups);
        this.router.delete("/", GroupController.deleteGroup);
    }

    getInstance() {
        return this.router;
    }
}

// exports
module.exports = GroupRouter;