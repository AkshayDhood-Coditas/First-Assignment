// Group Controller

// Importing dependencies
const GroupService = require("../services/group.service");
const GroupValidation = require("../validation/group.validation");

class GroupController {

    /**
     * @function createGroup
     * @description Creates New Group.
     * @param {*} req 
     * @param {*} res 
     * @returns response
     */
    static createGroup(req, res) {
        try {
            const { value, error } = GroupValidation.createGroup(req.body);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            const data = new GroupService(value).createGroupService();
            return res.status(200).json({ message: "Success.", error: null, data });
        } catch (error) {
            return res.status(500).json({ message: "Server Error!", error: error.message, data: null });
        }
    }


    /**
     * @function updateGroup
     * @description Updates existing Groups.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async updateGroup(req, res) {
        try {
            const { value, error } = GroupValidation.updateGroup(req.body);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            const data = await new GroupService(value).updateGroupService();
            return res.status(200).json({ message: "Success.", error: null, data });
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ message: error.message, error, data: null });
            return res.status(500).json({ message: "Server Error!", error: error.message, data: null });
        }
    }

    /**
     * @function getGroup
     * @description Gets Group data by ID.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async getGroups(req, res) {
        try {
            const { value, error } = GroupValidation.getGroup(req.query);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            const data = await new GroupService(value).getGroupService();
            return res.status(200).json({ message: "Success.", error: null, data });
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ message: error.message, error, data: null });
            return res.status(500).json({ message: "Server Error!", error: error.message, data: null });
        }
    }

    /**
     * @function deleteGroup
     * @description Delete Group.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async deleteGroup(req, res) {
        try {
            const { value, error } = GroupValidation.deleteGroup(req.body);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            await new GroupService(value).deleteGroupService();
            return res.status(200).json({ message: "Success.", error: null, data: null });
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ message: error.message, error, data: null });
            return res.status(500).json({ message: "Server Error!", error: error.message, data: null });
        }
    }
}

// Exports
module.exports = GroupController;