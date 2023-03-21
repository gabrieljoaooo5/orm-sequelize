const database = require('../models')

class UserController {
    static async getActiveUsers(req, res) {
        try {
            const users = await database.Users.findAll()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getAllUsers(req, res) {
        try {
            const users = await database.Users.scope('all').findAll()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getUserById(req, res) {
        const { id } = req.params
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
        const { id } = req.params
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
        const { id } = req.params
        try {
            await database.Users.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `Id ${id} was deleted.` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restoreUser(req, res) {
        const { id } = req.params
        try {
            await database.Users.restore({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} restored` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getEnrollmentsByStudentId(req, res) {
        const { studentId } = req.params
        try {
            const user = await database.Users.findOne({ where: { id: Number(studentId) } })
            const enrollments = await user.getEnrolledClasses()
            return res.status(200).json(enrollments)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getEnrollmentsCountByClassId(req, res) {
        const { classId } = req.params
        try {
            const enrollments = await database.Enrollments
                .findAndCountAll({
                    where: {
                        classId: Number(classId),
                        status: 'confirmed'
                    },
                    limit: 20,
                    order: [['studentId', 'DESC']]
                })
            return res.status(200).json(enrollments)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getFullClasses(req, res) {
        const limitStudentsPerClass = 2
        try {
            const fullClasses = await database.Enrollments
                .findAndCountAll({
                    where: {
                        status: 'confirmed'
                    },
                    attributes: ['classId'],
                    group: ['classId'],
                    having: Sequelize.literal(`count(classId) >= ${limitStudentsPerClass}`)
                })
            return res.status(200).json(fullClasses.count)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        try {
            const enrollment = await database.Enrollments.findOne({
                where: {
                    id: Number(enrollmentId),
                    studentId: Number(studentId)
                }
            })
            return res.status(200).json(enrollment)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createEnrollment(req, res) {
        const { studentId } = req.params
        const newEnrollment = { ...req.body, studentId: Number(studentId) }
        try {
            const newEnrollmentCreated = await database.Enrollments.create(newEnrollment)
            return res.status(200).json(newEnrollmentCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateEnrollment(req, res) {
        const { studentId, enrollmentId } = req.params
        const newInfo = req.body
        try {
            await database.Enrollments.update(newInfo, {
                where: {
                    id: Number(enrollmentId),
                    studentId: Number(studentId)
                }
            })
            const enrollmentUpdated = await database.Enrollments.findOne({ where: { id: Number(enrollmentId) } })
            return res.status(200).json(enrollmentUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteEnrollment(req, res) {
        const { enrollmentId } = req.params
        try {
            await database.Enrollments.destroy({ where: { id: Number(enrollmentId) } })
            return res.status(200).json({ mensagem: `id ${enrollmentId} deleted` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UserController
