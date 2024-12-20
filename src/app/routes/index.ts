import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { StudentRouts } from '../modules/student/student.route';
import { AcademicSemestersRoutes } from '../modules/academicSemester/academicSemester.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRouts,
  },
  {
    path: '/academic-semester',
    route: AcademicSemestersRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
