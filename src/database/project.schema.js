// Project Collection Schema

// Importing dependencies
const { Schema, default: mongoose } = require("mongoose");

// Project Schema
const ProjectSchema = new Schema({
    projectName: { type: String, required: true },
    projectCost: { type: Number, required: true },
    projectLocation: { type: String, required: true },
    projectGroups: [{
        type: Schema.Types.ObjectId,
        ref: "groups",
        default: []
    }]
}, { timestamps: true });

// Exports
module.exports = mongoose.model("projects", ProjectSchema);