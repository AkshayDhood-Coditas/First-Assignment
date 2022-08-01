// Project Controller

// Importing dependencies
const ProjectService = require("../services/project.service");
const ProjectValidation = require("../validation/project.validation");


class ProjectController {

    static createProject(req, res) {
        try {
            const { value, error } = ProjectValidation.createProject(req.body);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            const data = new ProjectService(value).createProjectService();

            return res.status(200).json({ message: "Success.", error: null, data });
        } catch (error) {
            return res.status(500).json({ message: "Server Error", error: error.message, data: null });
        }
    }

    static updateProject(req, res) {
        try {
            const { value, error } = ProjectValidation.updateProject(req.body);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            const data = new ProjectService(value).updateProjectService();

            return res.status(200).json({ message: "Success.", error: null, data });
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ message: error.message, error: null, data: null });
            return res.status(500).json({ message: "Server Error", error: error.message, data: null });
        }
    }

    static async getProject(req, res) {
        try {
            const { value, error } = ProjectValidation.getProject(req.query);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            const data = await new ProjectService(value).getProjectService();

            return res.status(200).json({ message: "Success.", error: null, data });
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ message: error.message, error: null, data: null });
            return res.status(500).json({ message: "Server Error", error: error.message, data: null });
        }
    }

    static async deleteProject(req, res) {
        try {
            const { value, error } = ProjectValidation.deleteProject(req.body);
            if (error) return res.status(400).json({ message: "Validation Error!", error: error.details[0].message, data: null });

            const data = await new ProjectService(value).deleteProjectService();

            return res.status(200).json({ message: "Success.", error: null, data });
        } catch (error) {
            if (error instanceof Error) return res.status(400).json({ message: error.message, error: null, data: null });
            return res.status(500).json({ message: "Server Error", error: error.message, data: null });
        }
    }
}

// Exports
module.exports = ProjectController;