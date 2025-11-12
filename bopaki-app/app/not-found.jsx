"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <div className="w-36 h-36 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/10">
          <FaExclamationTriangle className="text-orange-500 dark:text-orange-400 text-5xl" />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-3"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          404 - Page Not Found
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Oops! The page you’re looking for doesn’t exist or may have been
          moved.
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8"
      >
        <Button
          asChild
          className="bg-linear-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <Link href="/">Go Back Home</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
