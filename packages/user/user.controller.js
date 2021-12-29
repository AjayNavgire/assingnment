const userService = require('./user.service')
module.exports = {
    addUser: async (req, res, next) => {
        try {
            const userData = req.body
            if (!userData.firstName) {
                return res.status(400).send({
                    message: 'first name required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!userData.lastName) {
                return res.status(400).send({
                    message: 'last name required!',
                    status: false,
                    statusCode: 400
                })
            } else if (!userData.emailId) {
                return res.status(400).send({
                    message: 'user email id required',
                    status: false,
                    statusCode: 400
                })
            } 
            const userResult = await userService.insertUser(userData)
            return res.status(200).send({
                data: userResult,
                message: 'user added succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.status(500).send({
                message: ' internal server error at add user',
                status: false,
                statusCode: 500,
                error
            })

        }

    },
    deleteUser: async (req, res, next) => {
        try {
            const _id = req.params.userId
            if (!_id) {
                return res.status(400).send({
                    message: 'userId required!',
                    status: false,
                    statusCode: 400
                })
            }
            const userResult = await userService.deleteUserById(_id)
            if(!userResult){
                return res.status(200).send({
                    message : 'user id not found',
                    status : true,
                    statusCode : 204
                })

            }
            return res.status(200).send({
                data: userResult,
                message: 'user deleted succesfully',
                status: true,
                statusCode: 200
            })

        } catch (error) {
            return res.status(500).send({
                message: ' internal server error at delete user',
                status: false,
                statusCode: 500,
                error
            })

        }

    },
    getAllUser: async (req, res, next) => {
        try {
            const userList = await userService.findAllUser()
            if (!userList) {
                return res.status(200).send({
                    message: 'userList not found',
                    statusCode: 204,
                    status: true
                })

            }
            return res.status(200).send({
                data: userList,
                message: 'userList get successfully',
                status: true,
                statusCode: 200

            })
        } catch (error) {
            return res.status(500).send({
                message: 'userlist internel server error',
                status: false,
                statusCode: 500,
                error

            })
        }

    },
    updateUser: async (req, res, next) => {
        try {
            const userData = req.body
            const _id = req.params.userId
            if (!_id) {
                return res.status(400).send({
                    message: 'userId required',
                    status: false,
                    statusCode: 400
                })
            } else if (!userData.firstName) {
                return res.status(400).send({
                    message: 'user first name required',
                    status: false,
                    statusCode: 400
                })
            } else if (!userData.lastName) {
                return res.status(400).send({
                    message: 'user last name required',
                    status: false,
                    statusCode: 400
                })
            } else if (!userData.emailId) {
                return res.status(400).send({
                    message: 'user email Id required',
                    status: false,
                    statusCode: 400
                })
            } 
            const userResult = await userService.updateUserById(_id, userData)
            if (!userResult) {
                return res.status(400).send({
                    message: 'user update failed',
                    status: false,
                    statusCode: 400
                })
            }
            return res.status(200).send({
                data:userResult,
                message: 'user  updated successfully',
                status: true,
                statusCode: 200
            })
        } catch (error) {
            return res.status(500).send({
                message: 'internal server error',
                status: false,
                statusCode: 500,
                error: error
            })
        }
    }
}