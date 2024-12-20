"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavItem = ({ title, param }) => {
  const searchParams = useSearchParams();

  const genre = searchParams.get("genre");

  return (
    <div>
      <Link className={``} href={`/?genre=${param}`}>
        {title} {genre}
      </Link>
    </div>
  );
};

export default NavItem;
