// User Collection Schema

// Importing dependencies
const { Schema, default: mongoose } = require("mongoose");

// User Schema
const UserSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    isActive: { type: Boolean, required: true }
}, { timestamps: true });

// Exports
module.exports = mongoose.model("user", UserSchema);