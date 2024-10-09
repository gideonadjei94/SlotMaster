import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/Assets/logo.png";
import { AuthModal } from "./AuthModal";

export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between ">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" className="size-10" />
        <h4 className=" text-2xl font-semibold">
          Slot<span className="text-blue-600">Master</span>
        </h4>
      </Link>
      <AuthModal />
    </div>
  );
}
