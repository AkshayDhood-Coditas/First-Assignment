// Main Server code

// Importing dependencies
const morgan = require("morgan");
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const MainRouter = require("./routes/main.routes");
const swaggerDocument = require("./utils/swagger.info");
const DBConnection = require("./database/mongodb.connection");
require("dotenv").config();


// App Class
class App {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.main();
        this.listen();
    }

    // Main Method
    main() {
        // DB Connection
        new DBConnection();

        process
            .on("uncaughtException", (error) => {
                console.log(`uncaughtException---------${error}`);
            })
            .on("unhandledRejection", (error) => {
                console.log(`unhandledRejection--------${error}`);
            });

        this.app.use(morgan("dev"));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());

        // Swagger
        this.app.use('/api/explorer', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        // Api Routes
        this.app.use(new MainRouter().getInstance());
    }

    // Listens to Port No. 
    listen() {
        this.app.listen(this.port, () => {
            console.log(`------Server Started-------`);
            console.log(`---http://localhost:${this.port}---`);
        });
    }
}

// Exports
module.exports = App;