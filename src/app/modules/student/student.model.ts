import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required."],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required."],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required."],
    match: [
      /^\d{10}$/,
      "Father's contact number must be a valid 10-digit number.",
    ],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required."],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required."],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required."],
    match: [
      /^\d{10}$/,
      "Mother's contact number must be a valid 10-digit number.",
    ],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required."],
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required."],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required."],
    match: [
      /^\d{10}$/,
      "Local guardian's contact number must be a valid 10-digit number.",
    ],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required."],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required.'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is required.'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        "Gender can only be one of the following: 'male', 'female', 'other'.",
    },
    required: [true, 'Gender is required.'],
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of birth is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email address is required.'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.'],
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required.'],
    match: [/^\d{10}$/, 'Contact number must be a valid 10-digit number.'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required.'],
    match: [
      /^\d{10}$/,
      'Emergency contact number must be a valid 10-digit number.',
    ],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message:
        'Blood group must be one of the following: A+, A-, B+, B-, AB+, AB-, O+, O-.',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required.'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required.'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required.'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required.'],
  },
  profileImg: {
    type: String,
    match: [/^(http|https):\/\/[^\s]+$/, 'Profile image must be a valid URL.'],
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: 'Status must be either "active" or "blocked".',
    },
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
