import { redirect } from "next/navigation";
import { auth } from "../utils/auth";
import { requireUser } from "../utils/hook";
import prisma from "../utils/db";

async function getData(userId: string) {
  const data = await prisma.user?.findUnique({
    where: {
      id: userId,
    },
    select: {
      userName: true,
      eventType: {
        select: {
          id: true,
          active: true,
          title: true,
          url: true,
          duration: true,
        },
      },
    },
  });
}
export default async function DashboardPage() {
  const session = await requireUser();

  return (
    <div>
      <h1>Hello Welcome to your dashboard</h1>
    </div>
  );
}
