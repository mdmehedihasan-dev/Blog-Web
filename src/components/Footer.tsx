// components/Footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Blog Name */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-black">Daily Blog</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/about">
            <p className="hover:text-blue-500 text-black">About</p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-blue-500 text-black">Contact</p>
          </Link>
          <Link href="/privacy">
            <p className="hover:text-blue-500 text-black">Privacy Policy</p>
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="https://github.com/mdmehedihasan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
           
          >
            GitHub
          </Link>
          <Link
            href="https://medium.com/@mdmehedihasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
           
          >
            Medium
          </Link>
          <Link
            href="https://linkedin.com/in/mdmehedihasan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
           
          >
            LinkedIn
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-sm text-blue-400">
        &copy; {new Date().getFullYear()} Mehedi&apos;s Blog. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
