// Project Service

// Importing dependencies
const GroupModel = require("../database/group.schema");
const ProjectModel = require("../database/project.schema");


class ProjectService {
    constructor(data) {
        this.data = data;
    }

    createProjectService() {
        return new ProjectModel(this.data).save();
    }

    async updateProjectService() {
        let result = await ProjectModel.findOne({ _id: this.data.id });
        if (!result) throw Error("Project Not Found!");

        result.projectName = this.data.projectName ?? result.projectName;
        result.projectCost = this.data.projectCost ?? result.projectCost;
        result.projectLocation = this.data.projectLocation ?? result.projectLocation;
        result.projectGroups = this.data.projectGroups ?? result.projectGroups;

        return result.save();
    }

    async getProjectService() {
        let match = {};
        if (this.data?.id) match = { _id: this.data.id };

        let projectsData = await ProjectModel.find(match);

        let groupIDs = new Set();
        projectsData.forEach(element => {
            groupIDs.add(...element.projectGroups);
        });

        let groupsData = await GroupModel.aggregate([
            {
                $match: {
                    _id: { $in: [...groupIDs] }
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "groupMembers",
                    foreignField: "_id",
                    as: "users"
                }
            },
            {
                $project: {
                    groupName: "$groupName",
                    projectCode: "$groupCode",
                    groupMembers: "$users"
                }
            }
        ]);

        return projectsData.map(element => {
            element.projectGroups = element.projectGroups.map(item => groupsData.find(x => item.equals(x._id)) || item)
            return element;
        });
    }

    async deleteProjectService() {
        let result = await ProjectModel.deleteOne({ _id: this.data.id });
        if (!result.deletedCount) throw Error("Project Not Found!");
    }
}

// Exports 
module.exports = ProjectService;