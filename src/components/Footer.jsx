import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ChevronUp,
  Heart,
  Download,
  Phone,
} from "lucide-react";
import cv from "../assets/zahid_hussain_cv.pdf";
import logoImg from "../assets/logo.png";

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Footer = ({ darkMode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 relative ${
        darkMode ? "bg-gray-950 border-gray-800/80" : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 text-2xl font-extrabold font-heading"
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md border border-cyan-400/30">
                <img src={logoImg} alt="Zahid Hussain Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Zahid Hussain
              </span>
              <span className={darkMode ? "text-white" : "text-gray-900"}>.</span>
            </motion.a>

            <p
              className={`text-sm leading-relaxed max-w-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full Stack & Backend Engineer specializing in PHP Laravel, robust REST APIs, and database optimization. Based in Rahim Yar Khan, Pakistan.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                {
                  icon: LinkedinIcon,
                  href: "https://linkedin.com/in/zahid9210",
                  title: "LinkedIn",
                },
                {
                  icon: WhatsappIcon,
                  href: "https://wa.me/923057009210",
                  title: "WhatsApp",
                },
                {
                  icon: Mail,
                  href: "mailto:jamzahid1999@gmail.com",
                  title: "Email",
                },
                {
                  icon: Phone,
                  href: "tel:03057009210",
                  title: "Phone",
                },
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.title}
                    className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-gray-950 shadow-md shadow-cyan-500/20"
                  >
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4
              className={`text-xs font-extrabold uppercase tracking-widest mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                "Home",
                "Services",
                "About",
                "Skills",
                "Projects",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-xs font-medium transition-colors hover:text-cyan-400 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Downloads */}
          <div className="md:col-span-4">
            <h4
              className={`text-xs font-extrabold uppercase tracking-widest mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Direct Actions
            </h4>
            <div className="space-y-3">
              <a
                href={cv}
                download="Zahid_Hussain_CV.pdf"
                className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 text-cyan-400 hover:border-cyan-400"
                    : "bg-white border-gray-200 text-cyan-700 hover:border-cyan-500"
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>

              <a
                href="https://wa.me/923057009210"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10"
                    : "bg-white border-gray-200 text-emerald-700 hover:border-emerald-500 hover:bg-emerald-50"
                }`}
              >
                <WhatsappIcon className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (+923057009210)</span>
              </a>

              <a
                href="mailto:jamzahid1999@gmail.com"
                className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 text-gray-300 hover:text-white hover:border-cyan-400"
                    : "bg-white border-gray-200 text-gray-700 hover:text-gray-950 hover:border-cyan-500"
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Direct Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4 ${
            darkMode ? "border-gray-800/80" : "border-gray-200"
          }`}
        >
          <p
            className={`text-xs font-medium ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            © {new Date().getFullYear()} Zahid Hussain. Built with React, Tailwind CSS & Framer Motion.
          </p>
          <p
            className={`text-xs font-medium flex items-center gap-1 ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            <span>Engineered with passion</span>
            <Heart className="w-3.5 h-3.5 text-cyan-400 fill-current inline" />
          </p>
        </div>
      </div>

      {/* Scroll To Top Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-gray-950 shadow-xl shadow-cyan-500/30 flex items-center justify-center"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
