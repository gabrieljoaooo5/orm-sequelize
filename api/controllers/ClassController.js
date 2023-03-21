const database = require('../models')

class ClassController {
    static async getClasses(req, res) {
        try {
            const classes = await database.Classes.findAll()
            return res.status(200).json(classes)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getClassById(req, res) {
        const { id }= req.params
        try {
            const classById = await database.Classes.findOne({ where: { id: Number(id) } })
            return res.status(200).json(classById)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createClass(req, res) {
        const createClass = req.body
        try {
            const newClass = await database.Classes.create(createClass)
            return res.status(200).json(newClass)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateClass(req, res) {
        const { id }= req.params
        const newInfo = req.body
        try {
            await database.Classes.update(newInfo, { where: { id: Number(id) } })
            const updatedClass = await database.Classes.findOne({ where: { id: Number(id) } })
            return res.status(200).json(updatedClass)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteClass(req, res) {
        const { id }= req.params
        try {
            await database.Classes.destroy( { where: { id: Number(id) } })
            return res.status(200).json({message: `Id ${id} was deleted.`})

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClassController