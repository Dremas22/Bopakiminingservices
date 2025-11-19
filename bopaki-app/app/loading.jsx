"use client";

import { Loader2 } from "lucide-react";
import { FaHardHat, FaCog } from "react-icons/fa";

const GlobalLoading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-background">
      {/* Spinner */}
      <Loader2 className="w-20 h-20 border-4 border-t-orange-500 border-border rounded-full animate-spin mb-6" />

      {/* Icons */}
      <div className="flex items-center gap-4 mb-4">
        <FaHardHat className="text-orange-500 w-8 h-8" />
        <FaCog className="text-oranger-500 w-8 h-8" />
      </div>

      {/* Loading Text */}
      <p className="text-lg md:text-xl font-semibold text-foreground">
        Bopaki Mining is Loading...
      </p>
    </div>
  );
};

export default GlobalLoading;
