const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/users', UserController.getUsers)
router.get('/users/:id', UserController.getUserById)
router.post('/users', UserController.createUser)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)
router.get('/users/:studentId/enrollment/:enrollmentId', UserController.getEnrollment)
router.post('/users/:studentId/enrollment', UserController.createEnrollment)
router.put('/users/:studentId/enrollment/:enrollmentId', UserController.updateEnrollment)
router.delete('/users/:studentId/enrollment/:enrollmentId', UserController.deleteEnrollment)

module.exports = router