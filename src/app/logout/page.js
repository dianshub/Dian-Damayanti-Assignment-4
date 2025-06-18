"use client";

import { useEffect } from "react";
import { logoutAction } from "./action";

export default function LogoutPage() {
  useEffect(() => {
    logoutAction();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-red-300 text-white">
      Logging out...
    </div>
  );
}
