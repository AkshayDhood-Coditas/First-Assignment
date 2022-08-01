// User Controller

// Importing dependencies
const UserService = require("../services/user.service");
const UserValidation = require("../validation/user.validation");


class UserController {

    /**
     * @function createUser
     * @description Create new User.
     * @param {*} req 
     * @param {*} res 
     * @returns response
     */
    static createUser(req, res) {
        try {
            const { value, error } = UserValidation.createUser(req.body);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            const data = new UserService(value).createUserService();
            return res.status(200).json({ message: "User Created.", error: null, data });
        } catch (error) {
            return res.status(500).json({ message: "Server Error!", error: error.message, data: null });
        }
    }

    /**
     * @function updateUser
     * @description Updates existing user by ID.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async updateUser(req, res) {
        try {
            const { value, error } = UserValidation.updateUser(req.body);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            const data = await new UserService(value).updateUserService();
            return res.status(200).json({ message: "User Updated.", error: null, data });
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ message: error.message, error, data: null });
            return res.status(500).json({ message: "Server Error!", error: error.message, data: null });
        }
    }

    /**
     * @function getUser
     * @description Gets Users data using ID.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async getUser(req, res) {
        try {
            const { value, error } = UserValidation.getUser(req.query);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            const data = await new UserService(value).getUserService();
            return res.status(200).json({ message: "Success.", error: null, data });
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ message: error.message, error, data: null });
            return res.status(500).json({ message: "Server Error!", error: error.message, data: null });
        }
    }

    /**
     * @function inActiveUser
     * @description In-Active existing user.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async inActiveUser(req, res) {
        try {
            const { value, error } = UserValidation.inActiveUser(req.body);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            const data = await new UserService(value).inActiveUserService();
            return res.status(200).json({ message: "User In-Activate.", error: null, data });
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ message: error.message, error, data: null });
            return res.status(500).json({ message: "Server Error!", error: error.message, data: null });
        }
    }
}

// Exports
module.exports = UserController;