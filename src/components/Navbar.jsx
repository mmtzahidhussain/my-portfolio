import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Briefcase, Code2, Sparkles } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = [
        "home",
        "services",
        "about",
        "skills",
        "projects",
        "testimonials",
        "contact",
      ];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-950/85 backdrop-blur-xl border-b border-gray-800/80 shadow-2xl shadow-cyan-950/20 py-3.5"
            : "bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-lg shadow-cyan-500/5 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-gray-950 shadow-md shadow-cyan-500/30 group-hover:rotate-6 transition-transform">
            <Code2 className="w-5 h-5 text-gray-950 stroke-[2.5]" />
          </div>
          <span className="font-heading">
            <span className="text-cyan-400">Zahid</span>
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              Hussain
            </span>
            <span className="text-cyan-400">.</span>
          </span>
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1.5 bg-gray-900/40 p-1.5 rounded-full border border-gray-800/50 backdrop-blur-md">
          {links.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? "text-cyan-400"
                      : darkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800/40"
                        : "text-gray-600 hover:text-gray-950 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-cyan-500/10 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA + Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-xl border transition-all duration-300 ${
              darkMode
                ? "bg-gray-900/90 border-gray-800 text-cyan-400 hover:border-cyan-400/50 hover:bg-gray-800/60"
                : "bg-gray-100 border-gray-200 text-amber-500 hover:border-amber-400/50 hover:bg-gray-200/80"
            }`}
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 stroke-[2.2]" />
            ) : (
              <Moon className="w-4 h-4 stroke-[2.2]" />
            )}
          </motion.button>

          {/* Hire Me CTA */}
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(34,211,238,0.4)" }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-gray-950 px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wide shadow-md shadow-cyan-500/20 transition-all"
          >
            <Briefcase className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Hire Me</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2.5 rounded-xl md:hidden border transition-colors ${
              darkMode
                ? "bg-gray-900 border-gray-800 text-white"
                : "bg-gray-100 border-gray-200 text-gray-900"
            }`}
            aria-label="Open menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden border-b ${
              darkMode ? "bg-gray-950/95 border-gray-800" : "bg-white/95 border-gray-200"
            } backdrop-blur-2xl`}
          >
            <div className="px-6 py-5 space-y-2">
              {links.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                    active === item.id
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      : darkMode
                        ? "text-gray-300 hover:bg-gray-900 hover:text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-950"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-gray-950 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center"
              >
                <Sparkles className="w-4 h-4" />
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
