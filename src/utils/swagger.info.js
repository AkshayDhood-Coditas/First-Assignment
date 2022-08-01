// Swagger Documentation

// Importing dependencies
const paths = require("./swagger.paths");
require("dotenv").config();

module.exports = {
    swagger: "2.0",
    info: {
        description: "This is a sample server documentation.",
        version: "1.0.0",
        title: "Assignment Swagger",
        contact: {
            name: "Akshay Dhood",
            email: "akshay.dhood@coditas.com"
        }
    },
    host: `localhost:${process.env.PORT}`,
    tags: ["User", "Group", "Project"],
    basePath: "/",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths
}