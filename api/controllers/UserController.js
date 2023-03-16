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

    static async getUserById(req, res) {
        const { id }= req.params
        try {
            const user = await database.Users.findOne({ where: { id: Number(id) } })
            return res.status(200).json(user)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createUser(req, res) {
        const user = req.body
        try {
            const newUser = await database.Users.create(user)
            return res.status(200).json(newUser)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateUser(req, res) {
        const { id }= req.params
        const newInfo = req.body
        try {
            await database.Users.update(newInfo, { where: { id: Number(id) } })
            const updatedUser = await database.Users.findOne({ where: { id: Number(id) } })
            return res.status(200).json(updatedUser)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteUser(req, res) {
        const { id }= req.params
        try {
            await database.Users.destroy( { where: { id: Number(id) } })
            return res.status(200).json({message: `Id ${id} was deleted.`})

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UserController