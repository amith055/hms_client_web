import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
});

export const RegisterSchema = z.object({
  hostelName: z.string().min(2, { message: "Hostel name is required." }),
  collegeName: z.string().min(2, { message: "College name is required." }),
  city: z.string().min(2, { message: "City is required." }),
  state: z.string().min(2, { message: "State is required." }),
  address: z.string().min(10, { message: "Full address is required." }),
  adminNumber: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit mobile number." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export const StudentSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  studentId: z.string().min(1, { message: "Student ID is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit mobile number." }),
  guardianName: z.string().min(2, { message: "Guardian's name is required." }),
  guardianPhone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit mobile number." }),
  roomNumber: z.string().min(1, { message: "Room number is required." }),
  bedNumber: z.string().min(1, { message: "Bed number is required." }),
});


export type LoginValues = z.infer<typeof LoginSchema>;
export type RegisterValues = z.infer<typeof RegisterSchema>;
export type StudentValues = z.infer<typeof StudentSchema>;
