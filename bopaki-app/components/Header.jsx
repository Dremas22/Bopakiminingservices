"use client";

import { useState } from "react";
import { pages } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Company Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 relative rounded-full overflow-hidden">
              <Image
                src="/images/BopakiminingLogo.jpg"
                alt="Bopaki Mining Services"
                fill
                className="object-cover"
              />
            </div>
            <span className="hidden md:block text-xl font-bold text-gray-800 hover:text-[#FF9900] transition-colors">
              Bopaki Mining Services
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <Link
                key={page.id}
                href={page.href}
                className={`relative px-2 py-1 text-gray-800 font-medium hover:text-[#FF9900] transition-colors ${
                  pathname === page.href
                    ? "after:block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-[#FF9900]"
                    : ""
                }`}
              >
                {page.title.split(" - ")[0]}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDrawer}
              className="text-gray-800 hover:text-[#FF9900] focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image
                src="/images/BopakiminingLogo.jpg"
                alt="Bopaki Mining Services"
                fill
                className="object-cover"
              />
            </div>
            {/* Name hidden on mobile */}
          </Link>
          <button
            onClick={toggleDrawer}
            className="text-gray-800 hover:text-[#FF9900] focus:outline-none"
          >
            <FiX size={28} />
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-4 px-4">
          {pages.map((page) => (
            <Link
              key={page.id}
              href={page.href}
              onClick={() => setIsOpen(false)}
              className={`text-gray-800 font-medium hover:text-[#FF9900] transition-colors ${
                pathname === page.href ? "border-l-4 border-[#FF9900] pl-2" : ""
              }`}
            >
              {page.title.split(" - ")[0]}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay when drawer is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={toggleDrawer}
        ></div>
      )}
    </header>
  );
};

export default Header;
