import { z } from 'zod';

// Define the UserName schema
const createUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First name is required.' })
    .max(20, { message: 'First name can not be more than 20 characters.' })
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      { message: 'First name must be capitalized.' },
    ),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().min(1, { message: 'Last name is required.' }),
});

// Define the Guardian schema
const createGuardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: "Father's name is required." }),
  fatherOccupation: z
    .string()
    .min(1, { message: "Father's occupation is required." }),
  fatherContactNo: z
    .string()
    .min(1, { message: "Father's contact number is required." }),
  motherName: z.string().min(1, { message: "Mother's name is required." }),
  motherOccupation: z
    .string()
    .min(1, { message: "Mother's occupation is required." }),
  motherContactNo: z
    .string()
    .min(1, { message: "Mother's contact number is required." }),
});

// Define the LocalGuardian schema
const createLocalGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: "Local guardian's name is required." }),
  occupation: z
    .string()
    .min(1, { message: "Local guardian's occupation is required." }),
  contactNo: z
    .string()
    .min(1, { message: "Local guardian's contact number is required." }),
  address: z
    .string()
    .min(1, { message: "Local guardian's address is required." }),
});

// Define the main Student schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: createUserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other'], {
        errorMap: () => ({
          message: "Gender must be 'male', 'female', or 'other'.",
        }),
      }),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .email({ message: 'Invalid email address.' })
        .min(1, { message: 'Email address is required.' }),
      contactNo: z.string().min(1, { message: 'Contact number is required.' }),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency contact number is required.' }),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
          errorMap: () => ({ message: 'Invalid blood group.' }),
        })
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required.' }),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent address is required.' }),
      guardian: createGuardianValidationSchema,
      localGuardian: createLocalGuardianValidationSchema,
      profileImg: z.string().optional(),
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

// Define the UserName schema
const updatedUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First name is required.' })
    .max(20, { message: 'First name can not be more than 20 characters.' })
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      { message: 'First name must be capitalized.' },
    )
    .optional(),
  middleName: z.string().trim().optional().optional(),
  lastName: z
    .string()
    .trim()
    .min(1, { message: 'Last name is required.' })
    .optional(),
});

// Define the Guardian schema
const updateGuardianValidationSchema = z.object({
  fatherName: z
    .string()
    .min(1, { message: "Father's name is required." })
    .optional(),
  fatherOccupation: z
    .string()
    .min(1, { message: "Father's occupation is required." })
    .optional(),
  fatherContactNo: z
    .string()
    .min(1, { message: "Father's contact number is required." })
    .optional(),
  motherName: z
    .string()
    .min(1, { message: "Mother's name is required." })
    .optional(),
  motherOccupation: z
    .string()
    .min(1, { message: "Mother's occupation is required." })
    .optional(),
  motherContactNo: z
    .string()
    .min(1, { message: "Mother's contact number is required." })
    .optional(),
});

// Define the LocalGuardian schema
const updateLocalGuardianValidationSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Local guardian's name is required." })
    .optional(),
  occupation: z
    .string()
    .min(1, { message: "Local guardian's occupation is required." })
    .optional(),
  contactNo: z
    .string()
    .min(1, { message: "Local guardian's contact number is required." })
    .optional(),
  address: z
    .string()
    .min(1, { message: "Local guardian's address is required." })
    .optional(),
});

const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updatedUserNameValidationSchema.optional(),
      gender: z
        .enum(['male', 'female', 'other'], {
          errorMap: () => ({
            message: "Gender must be 'male', 'female', or 'other'.",
          }),
        })
        .optional(),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .email({ message: 'Invalid email address.' })
        .min(1, { message: 'Email address is required.' })
        .optional(),
      contactNo: z
        .string()
        .min(1, { message: 'Contact number is required.' })
        .optional(),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency contact number is required.' })
        .optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
          errorMap: () => ({ message: 'Invalid blood group.' }),
        })
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required.' })
        .optional(),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent address is required.' })
        .optional(),
      guardian: updateGuardianValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      profileImg: z.string().optional().optional(),
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

// Export the schema
export const StudentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
