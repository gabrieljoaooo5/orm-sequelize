const database = require('../models')

class LevelController {
    static async getLevels(req, res) {
        try {
            const levels = await database.Levels.findAll()
            return res.status(200).json(levels)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getLevelById(req, res) {
        const { id }= req.params
        try {
            const level = await database.Levels.findOne({ where: { id: Number(id) } })
            return res.status(200).json(level)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createLevel(req, res) {
        const level = req.body
        try {
            const newLevel = await database.Levels.create(level)
            return res.status(200).json(newLevel)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateLevel(req, res) {
        const { id }= req.params
        const newInfo = req.body
        try {
            await database.Levels.update(newInfo, { where: { id: Number(id) } })
            const updatedLevel = await database.Levels.findOne({ where: { id: Number(id) } })
            return res.status(200).json(updatedLevel)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteLevel(req, res) {
        const { id }= req.params
        try {
            await database.Levels.destroy( { where: { id: Number(id) } })
            return res.status(200).json({message: `Id ${id} was deleted.`})

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = LevelController