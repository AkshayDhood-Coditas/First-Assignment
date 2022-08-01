// Group Collection Schema

// Importing dependencies
const { Schema, default: mongoose } = require("mongoose");

// Group Schema
const GroupSchema = new Schema({
    groupName: { type: String, required: true },
    groupCode: { type: Number, required: true },
    groupMembers: [{
        type: Schema.Types.ObjectId,
        ref: "users",
        default: []
    }]
}, { timestamps: true });

// Exports
module.exports = mongoose.model("groups", GroupSchema);