// Project Validation

// Importing dependencies
const Joi = require("joi");


class ProjectValidation {
    static createProject(params) {
        const schema = Joi.object().keys({
            projectName: Joi.string().required(),
            projectCost: Joi.number().required(),
            projectLocation: Joi.string().required(),
            projectGroups: Joi.array().items(Joi.string().length(24)).default([])
        });

        return schema.validate(params);
    }

    static updateProject(params) {
        const schema = Joi.object().keys({
            id: Joi.string().length(24).required(),
            projectName: Joi.string().required(),
            projectCost: Joi.number().required(),
            projectLocation: Joi.string().required(),
            projectGroups: Joi.array().items(Joi.string().length(24)).default(null)
        });

        return schema.validate(params);
    }

    static getProject(params) {
        const schema = Joi.object().keys({
            id: Joi.string().length(24).default(null)
        });

        return schema.validate(params);
    }

    static deleteProject(params) {
        const schema = Joi.object().keys({
            id: Joi.string().length(24).required()
        });

        return schema.validate(params);
    }
}

// Exports
module.exports = ProjectValidation;