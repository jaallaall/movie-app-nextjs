import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="btn btn-ghost text-xl">
      <Image
        src={"/static/images/logo.svg"}
        alt="logo"
        height={80}
        width={120}
      />
    </Link>
  );
}
