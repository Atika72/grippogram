import * as z from "zod";

export const SignupValidaton = z.object({
  name: z.string().min(2, { message: "too short" }),
  username: z.string().min(2, { message: "too short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters." }),
});
