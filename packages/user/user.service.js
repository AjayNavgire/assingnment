const UserModel = require("./model/user.model")
exports.insertUser = async (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = new UserModel({
                firstName: userData.firstName,
                lastName: userData.lastName,
                emailId: userData.emailId
            });
            const result = await user.save()
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
exports.updateUserById = async (_id, userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await UserModel.findByIdAndUpdate({ _id },
                {
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    emailId: userData.emailId
                },
                 { new: true })
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}
exports.deleteUserById = async (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await UserModel.findByIdAndRemove(_id)
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}
exports.findAllUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const userList = await UserModel.find()
            resolve(userList)

        } catch (error) {
            reject(error)

        }
    })
}