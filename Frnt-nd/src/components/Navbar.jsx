import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 border-b border-[#E2E8F0]">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link to="/" className="text-2xl font-bold text-[#2563EB]">
          Drop<span className="text-[#1E293B]">Hope</span>
        </Link>

        
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[#64748B] hover:text-[#2563EB] transition"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-2">
            <Link
              to="/login"
              className="border border-[#2563EB] text-[#2563EB] px-4 py-1 rounded hover:bg-[#2563EB] hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-[#2563EB] text-white px-4 py-1 rounded hover:bg-[#1E40AF] transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white border-t border-[#E2E8F0]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-[#64748B] hover:text-[#2563EB] transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="border border-[#2563EB] text-[#2563EB] px-4 py-1 rounded hover:bg-[#2563EB] hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="bg-[#2563EB] text-white px-4 py-1 rounded hover:bg-[#1E40AF] transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
