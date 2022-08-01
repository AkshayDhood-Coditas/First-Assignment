// Groups Service

// Importing dependencies
const GroupModel = require("../database/group.schema");


class GroupService {
    constructor(data) {
        this.data = data;
    }

    createGroupService() {
        return new GroupModel(this.data).save();
    }

    async updateGroupService() {
        let [result] = await GroupModel.find({ _id: this.data.id });
        if (!result) throw Error("Group Not Found!");

        result.groupName = this.data.groupName ?? result.groupName;
        result.groupCode = this.data.groupCode ?? result.groupCode;
        result.groupMembers = this.data.groupMembers ?? result.groupMembers;

        return result.save();
    }

    async getGroupService() {
        let query = [];
        if (this.data.id) query.push({ _id: this.data.id });

        let result = await GroupModel.aggregate([
            ...query,
            {
                $lookup: {
                    from: "users",
                    localField: "groupMembers",
                    foreignField: "_id",
                    pipeline: [{
                        $match: {
                            $expr: {
                                $eq: [
                                    '$isActive', true
                                ]
                            }
                        }
                    }],
                    as: "user"
                }
            },
            {
                $project: {
                    _id: 1,
                    groupName: "$groupName",
                    groupCode: "$groupCode",
                    groupMembers: "$user"
                }
            }
        ]);

        if (!result.length) throw Error("Groups Not Found!");
        return result;
    }


    async deleteGroupService() {
        let result = await GroupModel.deleteOne({ _id: this.data.id });
        if (!result.deletedCount) throw Error("Group Not Found!");
    }
}


// Exports
module.exports = GroupService;