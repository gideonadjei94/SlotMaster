"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import GoogleLogo from "@/app/Assets/google.png";
import GitHubLogo from "@/app/Assets/Github.jpeg";
import Image from "next/image";

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait..
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src={GoogleLogo} alt="Google Logo" className="w-7 h-4 mr-2" />
          Sign in with Google
        </Button>
      )}
    </>
  );
}
export function GitHubAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait..
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src={GitHubLogo} alt="GitHub Logo" className="size-5 mr-2" />
          Sign in with GitHub
        </Button>
      )}
    </>
  );
}
