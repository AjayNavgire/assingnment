const userController = require("../packages/user/user.controller")

module.exports = (app) => {
    // welcome test api
    app.get('/', (req, res, next) => {
        try {
            return res.status(200).send({
                message: 'Welcome to user API',
                status: true,
                statusCode: 200
            }
            )
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                status: false,
                statusCode: 500,
                error
            })
        }
    })

// add user api 
    app.post('/user/add', userController.addUser )
    app.delete('/user/delete/:userId', userController.deleteUser)
    app.get('/user/allList', userController.getAllUser)
    app.put('/user/update/:userId', userController.updateUser)
}