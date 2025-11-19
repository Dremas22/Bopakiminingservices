"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const socialLinks = [
    { icon: <FaFacebookF />, name: "Facebook", href: "#" },
    { icon: <FaTwitter />, name: "Twitter", href: "#" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", href: "#" },
    { icon: <FaInstagram />, name: "Instagram", href: "#" },
  ];

  return (
    <motion.footer
      key={pathname}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-blue-600 dark:bg-blue-800 text-white dark:text-gray-200 pt-8 transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 flex flex-col items-center md:items-start"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-500 dark:text-orange-400">
            Bopaki Mining
          </h3>
          <p className="text-gray-100 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            A 100% black woman-owned company providing professional mining and
            engineering solutions with integrity, reliability, and excellence.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center md:items-start"
        >
          <h4 className="text-xl sm:text-2xl font-semibold text-orange-500 dark:text-orange-400 mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3 text-gray-100 dark:text-gray-300 text-sm sm:text-base flex flex-col items-center md:items-start">
            {/* Address */}
            <li className="flex flex-col items-center md:items-start space-y-1">
              <FaMapMarkerAlt className="text-orange-500 dark:text-orange-400" />
              <span>House no 0462 Mmadiphiri Section</span>
              <span>Phokeng 0335</span>
            </li>

            {/* Emails */}
            <li className="flex items-center justify-center md:justify-start space-x-3">
              <FaEnvelope className="text-orange-500 dark:text-orange-400" />
              <a
                href="mailto:info@bopakimining.co.za"
                className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors break-all"
              >
                info@bopakimining.co.za
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-3">
              <FaEnvelope className="text-orange-500 dark:text-orange-400" />
              <a
                href="mailto:keikanetswe@gmail.com"
                className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors break-all"
              >
                keikanetswe@gmail.com
              </a>
            </li>

            {/* Phone */}
            <li className="flex items-center justify-center md:justify-start space-x-3">
              <FaPhoneAlt className="text-orange-500 dark:text-orange-400" />
              <a
                href="tel:+27832121460"
                className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors break-all"
              >
                +27 83 212 1460
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Follow Us Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center md:items-start"
        >
          <h4 className="text-xl sm:text-2xl font-semibold text-orange-500 dark:text-orange-400 mb-3">
            Follow Us
          </h4>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-full shadow-lg hover:bg-orange-500 hover:text-white dark:hover:bg-orange-400 dark:hover:text-white transform hover:scale-110 transition-all"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="mt-3 text-gray-100 dark:text-gray-300 text-sm sm:text-base text-center md:text-left">
            Stay connected with us on social media for updates and insights.
          </p>
        </motion.div>
      </div>

      {/* Bottom copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 border-t border-white/20 dark:border-gray-400/20 py-6 text-center text-gray-300 dark:text-gray-400 text-sm sm:text-base font-semibold transition-colors"
      >
        ©{" "}
        <span className="text-primary text-lg sm:text-xl font-bold">
          {new Date().getFullYear()}
        </span>{" "}
        Bopaki Mining Services (Pty) Ltd. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
