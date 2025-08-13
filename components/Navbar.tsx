"use client";

import Link from "next/link";
import Image from "next/image";
import { links } from "@/constants";
import { useState, MouseEvent } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import MobileNav from "./MobileNav";
import Button from "./ui/UIButton";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = (event: MouseEvent) => {
    setShowNav((prev) => !prev);
  };

  return (
    <header className="header border_b">
      <nav className="nav-bar">
        <Link href="/">
          <div className="rounded-full bg-color-6">
            <Image
              src="/icons/logo.ico"
              alt="shefcodev logo"
              width={40}
              height={40}
              className="p-[3px] cursor-pointer"
            />
          </div>
        </Link>

        <div className="hidden lg:flex-center gap-x-40">
          <ul className="flex-center gap-4">
            {links.map(({ title, href }: Link, index) => (
              <li key={index}>
                <Link href={href} className="link focus:link-active">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button className="hidden max-lg:flex-center" onClick={toggleShowNav}>
          {showNav ? (
            <IoMdClose className="text-color-6" size={30} />
          ) : (
            <CiMenuFries className="text-color-6" size={30} />
          )}
        </Button>
      </nav>

      <MobileNav links={links} show={showNav} />
    </header>
  );
};

export default Navbar;
