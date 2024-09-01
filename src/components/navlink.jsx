"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navlink({ link }) {
  const pathName = usePathname();
//   console.log(pathName);

  return (
    <Link
      href={link.url}
      className={`rounded p-1 ${pathName === link.url ? "bg-black text-white" : ""}`}
    >
      {link.title}
    </Link>
  );
}

export default Navlink;
