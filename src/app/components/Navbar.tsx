import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/Assets/Logo.png";

export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between ">
      <Link href="/">
        <Image src={Logo} alt="Logo" className="size-10" />
      </Link>
    </div>
  );
}
