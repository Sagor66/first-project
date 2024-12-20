import express from 'express';
import { AcademicSemesterValidations } from './academicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterControllers } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);
router.get('/:id', AcademicSemesterControllers.getSingleAcademicSemester);
router.patch(
  '/:id',
  validateRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateSingleAcademicSemester,
);

export const AcademicSemestersRoutes = router;
