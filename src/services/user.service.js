// User Service

// Importing dependencies
const UserModel = require("../database/user.schema");

class UserService {
    constructor(data) {
        this.data = data;
    }

    createUserService() {
        return new UserModel(this.data).save();
    }

    async updateUserService() {
        let [result] = await UserModel.find({ _id: this.data.id });
        if (!result) throw Error("User Not Found!");

        result.name = this.data.name ?? result.name;
        result.address = this.data.address ?? result.address;
        result.isActive = this.data.isActive ?? result.isActive;

        return result.save();
    }

    async getUserService() {
        let match = {};
        if (this.data?.id) match._id = this.data.id;

        let data = await UserModel.find(match);

        if (data.length) return data;
        throw Error("User Not Found!");
    }

    deleteUserService() {
        return UserModel.deleteOne({ _id: this.data.id });
    }

    async inActiveUserService() {
        let [result] = await UserModel.find({ _id: this.data.id });
        if (!result) throw Error("User Not Found!");

        if (!result.isActive) throw Error("User Already InActive!");
        result.isActive = false;

        return result.save();
    }
}

// Exports
module.exports = UserService;
