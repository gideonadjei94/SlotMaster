"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "./SubmitButtons";

interface settingsProps {
  fullName: string;
  email: string;
  profileImage: string;
}
export function SettingsForm({ fullName, email, profileImage }: settingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your account settings.</CardDescription>
      </CardHeader>

      <form>
        <CardContent className="flex flex-col gap-y-4">
          <div className="grid gap-y-2">
            <Label>Full Name</Label>
            <Input defaultValue={fullName} placeholder="Gideon Adjei" />
          </div>
          <div className="grid gap-y-2">
            <Label>Email</Label>
            <Input
              disabled
              defaultValue={email}
              placeholder="example@gmail.com"
            />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton text="Save Changes" />
        </CardFooter>
      </form>
    </Card>
  );
}
