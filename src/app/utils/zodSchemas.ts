import { conformZodMessage } from "@conform-to/zod";
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

export function onboardingSchemavalidation(options?: {
  isUsernameUnique: () => Promise<boolean>;
}) {
  return z.object({
    userName: z
      .string()
      .min(3)
      .max(150)
      .regex(/^[a-zA-Z0-9-]+$/, {
        message: "Username can only contain letters, numbers and hyphens",
      })
      .pipe(
        z.string().superRefine((_, ctx) => {
          if (typeof options?.isUsernameUnique !== "function") {
            ctx.addIssue({
              code: "custom",
              message: conformZodMessage.VALIDATION_UNDEFINED,
              fatal: true,
            });
            return;
          }

          return options.isUsernameUnique().then((isUnique) => {
            if (!isUnique) {
              ctx.addIssue({
                code: "custom",
                message: "Username already exists",
              });
            }
          });
        })
      ),
    fullName: z
      .string()
      .max(150)
      .min(3)
      .regex(/^[\p{L}\s-]+$/u, {
        message: "FullName can only contain letters and hyphens",
      }),
  });
}
