import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRouts } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
const app: Application = express();
// const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRouts);
app.use('/api/v1/users', UserRoutes);

// test if server is running
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Worldz!');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
