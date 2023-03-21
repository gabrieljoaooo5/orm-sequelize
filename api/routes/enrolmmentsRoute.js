const { Router } = require('express')
const EnrollmentController = require('../controllers/EnrollmentController')

const router = Router()

router.get('/enrollments', EnrollmentController.getEnrollments)
router.get('/enrollments/:id', EnrollmentController.getEntollmentById)
router.post('/enrollments', EnrollmentController.createEnrollment)
router.put('/enrollments/:id', EnrollmentController.updateEnrollment)
router.delete('/enrollments/:id', EnrollmentController.deleteEnrollment)

module.exports = router