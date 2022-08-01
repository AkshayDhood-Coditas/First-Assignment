// Group Validation

// Importing dependencies
const Joi = require("joi");


class GroupValidation {
    static createGroup(params) {
        const schema = Joi.object().keys({
            groupName: Joi.string().required(),
            groupCode: Joi.string().required(),
            groupMembers: Joi.array().items(Joi.string().length(24)).default([])
        });

        return schema.validate(params);
    }

    static updateGroup(params) {
        const schema = Joi.object().keys({
            id: Joi.string().length(24).required(),
            groupName: Joi.string().default(null),
            groupCode: Joi.string().default(null),
            groupMembers: Joi.array().items(Joi.string().length(24)).default(null)
        });

        return schema.validate(params);
    }

    static getGroup(params) {
        const schema = Joi.object().keys({
            id: Joi.string().length(24).default(null)
        });

        return schema.validate(params);
    }

    static deleteGroup(params) {
        const schema = Joi.object().keys({
            id: Joi.string().length(24).required()
        });

        return schema.validate(params);
    }
}

// Exports
module.exports = GroupValidation;