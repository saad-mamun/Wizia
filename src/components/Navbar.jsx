import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const blurRef = useRef();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const navItems = ["About Us", "Pricing", "Customers", "Solutions"];

  return (
    <div className="relative">
      {/* NAVBAR */}
      <nav className="bg-[#183A40] text-white shadow-md fixed top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div>
            <img src="Logo.png" alt="Wizia" />
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item} className="hover:text-blue-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
          <div className="space-x-3 hidden md:block">
            <button className="bg-[#0FF1F6] hover:bg-[#55e2e2] transition duration-300 text-black tracking-wider font-semibold px-3 py-2 rounded-3xl">
              Book a Demo
            </button>
            <button className="px-3 py-2 border-2 rounded-3xl font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* BLUR BACKGROUND (only when mobile menu open) */}
      {open && (
        <div
          ref={blurRef}
          className="fixed inset-0 bg-transparent backdrop-blur-sm z-10 transition-all"
        ></div>
      )}

      {/* MOBILE MENU (Slide In) */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#68b4c2] shadow-lg z-30 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 flex flex-col gap-6 text-lg font-medium mt-16 ">
          {navItems.map((item) => (
            <a
              href=""
              key={item}
              onClick={() => setOpen(false)}
              className="text-left text-fuchsia-900 border-b-2"
            >
              {item}
            </a>
          ))}
          <div>
            <div className="flex flex-col gap-y-3 md:flex-row md:space-x-3 md:hidden ">
              <button className="bg-[#0FF1F6] hover:bg-[#49f1f1] transition duration-300 text-black tracking-wider font-semibold px-3 py-2 rounded-3xl">
                Book a Demo
              </button>
              <button className="px-3 py-2 border-2  rounded-3xl font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
