import Image from "next/image";
import React from "react";
import { Navigations } from "./Navigations";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
];
const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between flex-row py-4">
        <div className="logo">Rasu1ova</div>
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