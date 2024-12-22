import express from 'express';
import { StudentControllers } from './student.controller';
import { StudentValidations } from './student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);
router.get('/:student_id', StudentControllers.getSingleStudent);
router.patch(
  '/:student_id',
  validateRequest(StudentValidations.updateStudentValidationSchema),
  StudentControllers.updateSingleStudent,
);
router.delete('/:student_id', StudentControllers.deleteStudent);

export const StudentRouts = router;
