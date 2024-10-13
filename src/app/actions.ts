"use server";

import prisma from "./utils/db";
import { requireUser } from "./utils/hook";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "./utils/zodSchemas";

export async function OnboardingAction(preState: any, formData: FormData) {
  const session = await requireUser();
  const submission = parseWithZod(formData, {
    schema: onboardingSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
  const data = await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      userName: submission.value.userName,
      name: submission.value.fullName,
    },
  });
}
