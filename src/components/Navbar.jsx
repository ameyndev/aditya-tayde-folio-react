import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-[#312f30] text-[#eb5f2a] px-6 py-4 shadow-md z-50">
      <div className="flex items-center justify-between">
        {/* Left Side - Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold hover:text-gray-300">
            Aditya Tayde
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-[#eb5f2a] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>

        {/* Right Side - Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/designs"
            className="hover:text-gray-300 text-lg transition duration-200"
          >
            Designs
          </Link>
          <Link
            to="/video-videography"
            className="hover:text-gray-300 text-lg transition duration-200"
          >
            Video & Videography
          </Link>
          <Link
            to="/photography"
            className="hover:text-gray-300 text-lg transition duration-200"
          >
            Photography
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden">
          <Link
            to="/designs"
            className="hover:text-gray-300 text-lg transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Designs
          </Link>
          <Link
            to="/video-videography"
            className="hover:text-gray-300 text-lg transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Video & Videography
          </Link>
          <Link
            to="/photography"
            className="hover:text-gray-300 text-lg transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Photography
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
