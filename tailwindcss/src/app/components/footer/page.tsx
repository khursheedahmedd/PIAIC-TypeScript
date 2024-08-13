import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 All rights reserved.</p>
        <div className="mt-4">
          <Link href="#" legacyBehavior>
            <a className="text-gray-400 hover:text-white mx-2">
              Privacy Policy
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="text-gray-400 hover:text-white mx-2">
              Terms of Service
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="text-gray-400 hover:text-white mx-2">Contact Us</a>
          </Link>
        </div>
        <div className="mt-4">
          <a
            href="https://www.instagram.com/khur5heed.ahmed/"
            className="text-gray-400 hover:text-white mx-2"
          >
            Instagram
          </a>
        </div>
        <div className="mt-4">
          <Link
            href="https://khursheeds-portfolio.vercel.app/"
            passHref
            legacyBehavior
          >
            <a className="text-gray-400 hover:text-white mx-2">
              Developed by{" "}
              <span className="text-purple-700">Khursheed Ahmed</span>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
