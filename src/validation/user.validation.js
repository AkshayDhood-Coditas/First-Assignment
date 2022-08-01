// User Validation

// Importing dependencies
const Joi = require("joi");


class UserValidation {
    static createUser(params) {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            address: Joi.string().required(),
            isActive: Joi.boolean().default(true)
        });

        return schema.validate(params);
    }

    static updateUser(params) {
        const schema = Joi.object().keys({
            id: Joi.string().length(24).required(),
            name: Joi.string().default(null),
            address: Joi.string().default(null),
            isActive: Joi.boolean().default(null)
        });

        return schema.validate(params);
    }

    static getUser(params) {
        const schema = Joi.object().keys({
            id: Joi.string().length(24).default(null)
        });

        return schema.validate(params);
    }

    static deleteUser(params) {
        const schema = Joi.object().keys({
            id: Joi.string().length(24).required()
        });

        return schema.validate(params);
    }
}

// Exports
module.exports = UserValidation;