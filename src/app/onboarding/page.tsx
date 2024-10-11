import { Button } from "@/components/ui/button";
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

export default function onboardingRoute() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome to Slot<span className="text-primary">Master</span>
          </CardTitle>
          <CardDescription>
            We need the following information to setup your profile{" "}
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className="grid gap-y-5 ">
            <div className="grid gap-y-2">
              <Label>Full Name</Label>
              <Input placeholder="Gideon Adjei" />
            </div>
            <div className="grid gap-y-2">
              <Label>Username</Label>
              <div className="flex rounded-md">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">
                  {" "}
                  Slotmaster.com/
                </span>
                <Input
                  placeholder="example-user-123"
                  className="rounded-l-none"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
