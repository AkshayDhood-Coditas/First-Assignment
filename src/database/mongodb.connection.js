// MongoDB Connection

// Importing Dependencies
const mongoose = require("mongoose");


class DBConnection {
    constructor() {
        this.host = process.env.HOST;
        this.db = process.env.DATABASE;
        this.connectionURL = `mongodb://${this.host}:27017/${this.db}`;
        this.connect();
    }

    connect() {
        return mongoose.connect(this.connectionURL)
            .then(_ => console.log("MongoDB Connection SuccessFull!"))
            .catch(err => console.log(`MongoDB Connection Error ----- ${err}`));
    }
}

// Exports
module.exports = DBConnection;