const database = require('../models')

class UserController {
    static async getUsers(req, res) {
        try {
            const users = await database.Users.findAll()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UserController