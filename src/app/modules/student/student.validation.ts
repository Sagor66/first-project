import { z } from 'zod';

// Define the UserName schema
const userNameValidationSchema = z.object({
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
const guardianValidationSchema = z.object({
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
const localGuardianValidationSchema = z.object({
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
const studentValidationSchema = z.object({
  id: z.string().min(1, { message: 'Student ID is required.' }),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({
      message: "Gender must be 'male', 'female', or 'other'.",
    }),
  }),
  dateOfBirth: z.string().min(1, { message: 'Date of birth is required.' }),
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
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z
    .enum(['active', 'blocked'], {
      errorMap: () => ({
        message: 'Status must be either "active" or "blocked".',
      }),
    })
    .default('active'),
});

// Export the schema
export default studentValidationSchema;
