"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link
      href={`/?genre=${param}`}
      className={`hover:text-lime-800 hover:border-b dark:hover:text-lime-500  border-lime-800 ${
        param == genre ? "text-lime-800 dark:text-lime-500 border-b" : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavbarItem;
