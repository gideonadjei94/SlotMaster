import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import AlmostThere from "@/app/Assets/almost.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarCheck2 } from "lucide-react";

export default function OnboardingNylasRoute() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>You are almost There!</CardTitle>
          <CardDescription>
            We have to now connect your calendar to your account
          </CardDescription>
          <Image
            src={AlmostThere}
            alt="Almost there"
            className="rounded-lg size-96 "
          />
        </CardHeader>
        <CardContent>
          <Button className="w-full" asChild>
            <Link href="/api/auth">
              <CalendarCheck2 className="size-4 mr-2" />
              Connect Calendar to your Acoount
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
