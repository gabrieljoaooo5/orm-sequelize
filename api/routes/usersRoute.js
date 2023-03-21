const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/users', UserController.getActiveUsers)
router.get('/users/all', UserController.getAllUsers)
router.get('/users/:id', UserController.getUserById)
router.get('/users/:studentId/enrollments', UserController.getEnrollmentsByStudentId)
router.get('/users/enrollments/:classId/confirmed', UserController.getEnrollmentsCountByClassId)
router.get('/users/enrollments/fullclasses', UserController.getFullClasses)
router.post('/users', UserController.createUser)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)
router.post('/users/:id/restore', UserController.restoreUser)
router.get('/users/:studentId/enrollment/:enrollmentId', UserController.getEnrollment)
router.post('/users/:studentId/enrollment', UserController.createEnrollment)
router.put('/users/:studentId/enrollment/:enrollmentId', UserController.updateEnrollment)
router.delete('/users/:studentId/enrollment/:enrollmentId', UserController.deleteEnrollment)

module.exports = router