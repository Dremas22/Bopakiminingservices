"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaTwitter,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "hover:text-blue-600" },
    { icon: FaLinkedin, href: "#", color: "hover:text-blue-700" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-700" },
    {
      icon: FaEnvelope,
      href: "mailto:info@bopakimining.co.za",
      color: "hover:text-orange-500",
    },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass bg-accent border-b border-[#FF9900] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              {/* Logo container with gradient background */}
              <div className="w-10 h-10 bg-linear-to-r from-[#FF9900] to-[#0070C0] rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/BopakiminingLogo.jpg"
                  alt="Bopaki Mining Services Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg text-orange-600 hidden lg:block">
                Bopaki Mining Services
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="bg-white/90 dark:bg-gray-900/30 backdrop-blur-sm rounded-full px-6 py-2 border border-white/90 dark:border-gray-700/30">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      pathname === link.path
                        ? "bg-orange-500 text-white shadow-lg"
                        : "text-foreground hover:bg-accent/50 hover:text-orange-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Social Icons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`text-foreground ${social.color} transition-colors duration-200`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-white/50 transition-colors"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        className="md:hidden overflow-hidden glass bg-background/90 border-t border-background/20"
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.path
                  ? "bg-orange-500 text-white"
                  : "text-foreground hover:bg-accent/50 hover:text-orange-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-center space-x-4 pt-4 border-t border-accent/20">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className={`text-gray-600 ${social.color} transition-colors duration-200`}
              >
                <social.icon size={20} />
              </Link>
            ))}
            <ModeToggle />
          </div>
        </div>
      </motion.div>
    </header>
  );
}
