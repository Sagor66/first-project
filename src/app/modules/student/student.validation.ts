import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/)
    .message('{#label} must be capitalized.')
    .required()
    .label('First name'),
  middleName: Joi.string().trim().optional().label('Middle name'),
  lastName: Joi.string().trim().required().label('Last name'),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().label("Father's name"),
  fatherOccupation: Joi.string().required().label("Father's occupation"),
  fatherContactNo: Joi.string().required().label("Father's contact number"),
  motherName: Joi.string().required().label("Mother's name"),
  motherOccupation: Joi.string().required().label("Mother's occupation"),
  motherContactNo: Joi.string().required().label("Mother's contact number"),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().label("Local guardian's name"),
  occupation: Joi.string().required().label("Local guardian's occupation"),
  contactNo: Joi.string().required().label("Local guardian's contact number"),
  address: Joi.string().required().label("Local guardian's address"),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().label('Student ID'),
  name: userNameValidationSchema.required().label('Student name'),
  gender: Joi.string()
    .valid('male', 'female', 'other')
    .required()
    .label('Gender'),
  dateOfBirth: Joi.string().isoDate().required().label('Date of birth'),
  email: Joi.string().email().required().label('Email address'),
  contactNo: Joi.string().required().label('Contact number'),
  emergencyContactNo: Joi.string().required().label('Emergency contact number'),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .label('Blood group'),
  presentAddress: Joi.string().required().label('Present address'),
  permanentAddress: Joi.string().required().label('Permanent address'),
  guardian: guardianValidationSchema.required().label('Guardian information'),
  localGuardian: localGuardianValidationSchema
    .required()
    .label('Local guardian information'),
  profileImg: Joi.string().uri().optional().label('Profile image URL'),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .label('Status'),
});

export default studentValidationSchema;
