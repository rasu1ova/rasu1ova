'use client'
import Link from 'next/link'

import React from 'react'
import { usePathname } from "next/navigation";

type NavLink = {
  label:string;
  href:string
}
type Props = {
  navLinks: NavLink[]
}
const Navigations = ({navLinks}:Props) => {
  const pathname = usePathname()
  return (
    <>
    {navLinks.map((link) => {
      const isActive = pathname === link.href
      return(
        <Link
        key={link.label}
        href={link.href}
        className={isActive ? "active" : ""} >
          {link.label}
        </Link>
      )
    })}
    </>
  )
}

export {Navigations}