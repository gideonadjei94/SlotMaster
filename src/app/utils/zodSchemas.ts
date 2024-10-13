import { z } from "zod";

export const onboardingSchema = z.object({
  fullName: z
    .string()
    .max(150)
    .min(3)
    .regex(/^[\p{L}\s-]+$/u, {
      message: "FullName can only contain letters and hyphens",
    }),
  userName: z
    .string()
    .min(3)
    .max(150)
    .regex(/^[a-zA-Z0-9-]+$/, {
      message: "Username can only contain letters, numbers and hyphens",
    }),
});
