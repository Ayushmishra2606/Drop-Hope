import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#E2E8F0]">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-[#2563EB]">
            Drop<span className="text-white">Hope</span>
          </h2>
          <p className="mt-2 text-sm text-[#F1F5F9]">
            A platform to donate food, clothes, and more. Let’s spread hope together.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-[#F1F5F9]">
            <li><Link to="/" className="hover:text-[#2563EB]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#2563EB]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#2563EB]">Contact Us</Link></li>
            <li><Link to="/register" className="hover:text-[#2563EB]">Register as User</Link></li>
            <li><Link to="/ngo-register" className="hover:text-[#2563EB]">Register as NGO</Link></li>

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm text-[#F1F5F9]">Email: support@drophope.org</p>
          <p className="text-sm text-[#F1F5F9]">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="text-center text-sm text-[#64748B] py-4">
        © {new Date().getFullYear()} DropHope. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
