// Swagger Paths

const responses = {
    200: { description: "Success." },
    400: { description: "Bad Request!" },
    404: { description: "Not Found!" },
    500: { description: "Server Error!" },
}


module.exports = {

    // User Routes
    "/user": {
        post: {
            tags: ["User"],
            summary: "Create User.",
            description: "This API creates user. Name and Address are required.",
            parameters: [{
                in: "body",
                name: "createUser",
                description: "Example for Create User.",
                schema: {
                    type: "object",
                    properties: {
                        name: { type: "string", example: "Akshay Dhood" },
                        address: { type: "string", example: "Akola" },
                        isActive: { type: "boolean", example: true }
                    }
                }
            }],
            responses
        },
        put: {
            tags: ["User"],
            summary: "Update User.",
            description: "This API updates user by ID.",
            parameters: [{
                in: "body",
                name: "updateUser",
                description: "Example for Update User.",
                schema: {
                    type: "object",
                    required: ["id"],
                    properties: {
                        id: { type: "string", example: "62e76d29e18387d0365ace7e" },
                        name: { type: "string", example: "Coditas." },
                        address: { type: "string", example: "Pune." },
                        isActive: { type: "boolean", example: true }
                    }
                }
            }],
            responses
        },
        get: {
            tags: ["User"],
            summary: "Get User.",
            description: "This API gets the user details by ID.",
            parameters: [
                { in: "query", name: "id", description: "Id of the User. (Not Mandatory)" }
            ],
            responses
        },
        delete: {
            tags: ["User"],
            summary: "Delete User.",
            description: "This API deletes user by ID.",
            parameters: [{
                in: "body",
                name: "deleteUser",
                description: "Example for Delete User.",
                schema: {
                    type: "object",
                    required: ["id"],
                    properties: {
                        id: { type: "string", example: "62e76d29e18387d0365ace7e" }
                    }
                }
            }],
            responses
        }
    },
    "/user/inactive": {
        put: {
            tags: ["User"],
            summary: "InActive User.",
            description: "This API in-Actives the user by ID.",
            parameters: [{
                in: "body",
                name: "inActiveUser",
                description: "Example to inActive User.",
                schema: {
                    type: "object",
                    required: ["id"],
                    properties: {
                        id: { type: "string", example: "62e76d29e18387d0365ace7e" }
                    }
                }
            }],
            responses
        }
    },

    // Group Routes
    "/group": {
        post: {
            tags: ["Group"],
            summary: "Create Group.",
            description: "This API creates group.",
            parameters: [{
                in: "body",
                name: "createGroup",
                description: "Example for Create Group.",
                schema: {
                    type: "object",
                    properties: {
                        groupName: { type: "string", example: "Coditas." },
                        groupCode: { type: "number", example: 1 },
                        groupMembers: { type: "array", example: ["62e76d29e18387d0365ace7e"] }
                    }
                }
            }],
            responses
        },
        put: {
            tags: ["Group"],
            summary: "Update Group.",
            description: "This API updates group.",
            parameters: [{
                in: "body",
                name: "updateGroup",
                description: "Example for Updates Group by ID.",
                schema: {
                    type: "object",
                    required: ["id"],
                    properties: {
                        id: { type: "string", example: "62e532c4e73fa21cd1b698c0" },
                        groupName: { type: "string", example: "Coditas." },
                        groupCode: { type: "number", example: 1 },
                        groupMembers: { type: "array", example: ["62e76d29e18387d0365ace7e"] }
                    }
                }
            }],
            responses
        },
        get: {
            tags: ["Group"],
            summary: "Get Group.",
            description: "This API gets the groups details by ID.",
            parameters: [
                { in: "query", name: "id", description: "Id of the Group. (Not Mandatory)" }
            ],
            responses
        },
        delete: {
            tags: ["Group"],
            summary: "Delete Group.",
            description: "This API deletes group by ID.",
            parameters: [{
                in: "body",
                name: "deleteGroup",
                description: "Example for Delete Group.",
                schema: {
                    type: "object",
                    required: ["id"],
                    properties: {
                        id: { type: "string", example: "62e532c4e73fa21cd1b698c0" }
                    }
                }
            }],
            responses
        }
    },

    // Project Routes
    "/project": {
        post: {
            tags: ["Project"],
            summary: "Create Project.",
            description: "This API creates Project.",
            parameters: [{
                in: "body",
                name: "createProject",
                description: "Example for Create Project.",
                schema: {
                    type: "object",
                    properties: {
                        projectName: { type: "string", example: "Coditas." },
                        projectCost: { type: "number", example: 1 },
                        projectLocation: { type: "string", example: "Pune." },
                        projectGroups: { type: "array", example: ["62e532c4e73fa21cd1b698c0"] }
                    }
                }
            }],
            responses
        },
        put: {
            tags: ["Project"],
            summary: "Update Project.",
            description: "This API updates Project.",
            parameters: [{
                in: "body",
                name: "updateProject",
                description: "Example for Updates Project by ID.",
                schema: {
                    type: "object",
                    required: ["id"],
                    properties: {
                        id: { type: "string", example: "62e532e2e73fa21cd1b698c2" },
                        projectName: { type: "string", example: "Coditas." },
                        projectCost: { type: "number", example: 1 },
                        projectLocation: { type: "string", example: "Pune." },
                        projectGroups: { type: "array", example: ["62e532c4e73fa21cd1b698c0"] }
                    }
                }
            }],
            responses
        },
        get: {
            tags: ["Project"],
            summary: "Get Project.",
            description: "This API gets the Projects details by ID.",
            parameters: [
                { in: "query", name: "id", description: "Id of the Project. (Not Mandatory)" }
            ],
            responses
        },
        delete: {
            tags: ["Project"],
            summary: "Delete Project.",
            description: "This API deletes Project by ID.",
            parameters: [{
                in: "body",
                name: "deleteProject",
                description: "Example for Delete Project.",
                schema: {
                    type: "object",
                    required: ["id"],
                    properties: {
                        id: { type: "string", example: "62e532e2e73fa21cd1b698c2" }
                    }
                }
            }],
            responses
        }
    }
};