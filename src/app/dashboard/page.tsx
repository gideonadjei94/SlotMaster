import { redirect } from "next/navigation";
import { auth } from "../utils/auth";
import { requireUser } from "../utils/hook";

export default async function DashboardPage() {
  const session = await requireUser();

  return (
    <div>
      <h1>Hello Welcome to your dashboard</h1>
    </div>
  );
}
