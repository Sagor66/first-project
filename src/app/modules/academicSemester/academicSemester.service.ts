import AppError from '../../errors/AppError';
import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
import httpStatue from 'http-status-codes';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload?.name] !== payload?.code) {
    throw new AppError(httpStatue.NOT_FOUND, 'Invalid semester code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllAcademicSemestersFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemestersFromDB = async (id: string) => {
  const result = await AcademicSemester.findById({ _id: id });
  return result;
};

const updateSingleAcademicSemestersIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload?.name &&
    academicSemesterNameCodeMapper[payload?.name] !== payload?.code
  ) {
    throw new AppError(httpStatue.NOT_FOUND, 'Invalid semester code');
  }
  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemestersFromDB,
  updateSingleAcademicSemestersIntoDB,
};
