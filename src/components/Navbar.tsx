"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeDown } from "../lib/animations"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLink = [
    { link: "/", name: "Features" },
    { link: "/", name: "Pricing" },
    { link: "/", name: "Security" },
    { link: "/", name: "Benefits" },
  ];
  return (
    <motion.nav
      variants={fadeDown}
      initial="hidden"
      animate="visible"
      className="max-w-[1170px] mx-auto py-3 sm:py-6 px-3 sm:px-0"
    >
      <div className="flex justify-between items-center mx-2">
        <div className="flex gap-1 items-center">
          <Image src={"/assets/logo/logo.png"} alt="Easy Pay Logo" width={40} height={40}/>
          <span className="text-black text-[22px] sm:text-[28px] font-bold">Easy Pay</span>
        </div>
        <button className="md:hidden p-1" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          <svg className="w-7 h-7 text-[#6b7280]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className="hidden md:flex justify-center items-center gap-4 sm:gap-8 text-[16px] sm:text-[18px] font-semibold text-[#6b7280]">
          {navLink.map((nav, index) => (
            <Link href={nav.link} key={index}>{nav.name}</Link>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button variant="brand">Contact Us</Button>
        </div>
  </div>
  <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-30 px-6 transition-max-height duration-300 overflow-hidden rounded-b-xl ${menuOpen ? 'max-h-72 py-4' : 'max-h-0 py-0' }`}>
        <ul className="flex flex-col gap-6 text-[18px] font-semibold text-[#6b7280]">
          {navLink.map((nav, index) => (
            <Link href={nav.link} key={index} onClick={()=>setMenuOpen(false)}>{nav.name}</Link>
          ))}
          <Button variant="brand" className="w-full mt-2" onClick={()=>setMenuOpen(false)}>Contact Us</Button>
        </ul>
      </div>
    </motion.nav>
  );
}
export default Navbar