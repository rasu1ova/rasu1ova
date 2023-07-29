import Image from "next/image";
import React from "react";
import { Navigations } from "./Navigations";
import { Logo } from "../public/index";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "about" },
];
const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between flex-row py-4">
        <div className="logo">
          <Image 
            src={Logo}
            alt="there is logo img"
            width={290}
            height={140} />
        </div>
        <nav>
          <ul className="flex gap-6">
            <Navigations navLinks={navItems} />
          </ul>
        </nav>
      </div>
    </header>
  );
};
export { Header };
