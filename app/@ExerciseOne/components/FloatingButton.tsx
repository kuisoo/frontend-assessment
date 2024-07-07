"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const FloatingButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed bottom-[10%] right-4 w-[140px] h-max grid grid-cols-1 justify-items-center font-medium z-50">
      <button
        className={`py-2 w-full h-max text-center border-2 border-teal-600 rounded-t-lg ${
          pathname == "/" ? "bg-teal-600 text-white" : "bg-white text-teal-600"
        }`}
        onClick={() => router.push("/")}
      >
        EXERCISE 1
      </button>
      <button
        className={`py-2 w-full h-max text-center border-2 border-teal-600 border-t-0 rounded-b-lg ${
          pathname == "/exercise-2"
            ? "bg-teal-600 text-white"
            : "bg-white text-teal-600"
        }`}
        onClick={() => router.push("/exercise-2")}
      >
        EXERCISE 2
      </button>
    </div>
  );
};

export default FloatingButton;
