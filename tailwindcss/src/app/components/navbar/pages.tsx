"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  const handleHiClick = () => {
    router.push("/");
  };

  return (
    <div className="relative flex justify-center items-center py-4 sm:py-6 lg:py-8">
      <button
        className="absolute left-0 transform -translate-x-1/2 bg-blue-500 text-white rounded-full px-2 py-1 sm:px-4 sm:py-2 ml-8 md:ml-[6rem]"
        onClick={handleHiClick}
      >
        Hi
      </button>
      <div className="flex justify-center items-center bg-gray-200 text-gray-950 rounded-full py-2 px-4 sm:px-10 space-x-2 sm:space-x-4">
        <Link href="/" className="text-sm sm:text-base lg:text-lg">
          Home
        </Link>
        <Link href="/products" className="text-sm sm:text-base lg:text-lg">
          Products
        </Link>
        <Link href="/about" className="text-sm sm:text-base lg:text-lg">
          About
        </Link>
      </div>
      <button
        className="absolute right-0 transform translate-x-1/2 bg-blue-500 text-white rounded-full px-2 py-1 sm:px-4 sm:py-2 mr-8 md:mr-[6rem]"
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
}

export default Navbar;
