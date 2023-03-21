const database = require('../models')

class EnrollmentController {
    static async getEnrollments(req, res) {
        try {
            const enrollments = await database.Enrollments.findAll()
            return res.status(200).json(enrollments)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getEntollmentById(req, res) {
        const { id }= req.params
        try {
            const enrollment = await database.Enrollments.findOne({ where: { id: Number(id) } })
            return res.status(200).json(enrollment)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createEnrollment(req, res) {
        const enrollment = req.body
        try {
            const newEnrollments = await database.Enrollments.create(enrollment)
            return res.status(200).json(newEnrollments)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateEnrollment(req, res) {
        const { id }= req.params
        const newInfo = req.body
        try {
            await database.Enrollments.update(newInfo, { where: { id: Number(id) } })
            const updatedEnrollment = await database.Enrollments.findOne({ where: { id: Number(id) } })
            return res.status(200).json(updatedEnrollment)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteEnrollment(req, res) {
        const { id }= req.params
        try {
            await database.Enrollments.destroy( { where: { id: Number(id) } })
            return res.status(200).json({message: `Id ${id} was deleted.`})

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = EnrollmentController