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

export type LoginValues = z.infer<typeof LoginSchema>;
export type RegisterValues = z.infer<typeof RegisterSchema>;
