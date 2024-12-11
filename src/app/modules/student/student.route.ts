import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);
router.get('/:student_id', StudentControllers.getSingleStudent);
router.post('/create-student', StudentControllers.createStudent);
router.delete('/:student_id', StudentControllers.deleteStudent);

export const StudentRouts = router;
