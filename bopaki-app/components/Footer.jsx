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
      className="bg-blue-600 dark:bg-blue-800 text-white dark:text-gray-200 pt-6 transition-colors"
    >
      <div className="container mx-auto px-2 md:px-16 grid md:grid-cols-3 gap-6">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-orange-500 dark:text-orange-400">
            Bopaki Mining
          </h3>
          <p className="text-gray-100 dark:text-gray-300 leading-relaxed">
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
        >
          <h4 className="text-xl font-semibold text-orange-500 dark:text-orange-400 mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3 text-gray-100 dark:text-gray-300">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-orange-500 dark:text-orange-400 mt-1" />
              <span>
                House no 0462 Mmadiphiri Section <br />
                Phokeng 0335
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-orange-500 dark:text-orange-400" />
              <a
                href="mailto:info@bopakimining.co.za"
                className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                info@bopakimining.co.za
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-orange-500 dark:text-orange-400" />
              <a
                href="mailto:keikanetswe@gmail.com"
                className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                keikanetswe@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-orange-500 dark:text-orange-400" />
              <a
                href="tel:+27832121460"
                className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
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
        >
          <h4 className="text-xl font-semibold text-orange-500 dark:text-orange-400 mb-1">
            Follow Us
          </h4>
          <div className="flex flex-wrap gap-4">
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
          <p className="mt-3 text-gray-100 dark:text-gray-300 text-sm">
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
        className="mt-6 border-t border-white/20 dark:border-gray-400/20 py-6 text-center text-sm text-gray-300 dark:text-gray-400 font-bold transition-colors"
      >
        © {new Date().getFullYear()} Bopaki Mining Services (Pty) Ltd. All
        rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
