// SERVER

// Importing Server App
const App = require("./src/app");


// Starting Server
try {
    new App();
} catch (error) {
    console.error(`Internal Server Error! -------- ${error}`);
}