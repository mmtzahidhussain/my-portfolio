import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Sparkles,
  Download,
  ArrowRight,
  Code2,
  Database,
  ShieldCheck,
  Zap,
  Briefcase,
  Layers,
} from "lucide-react";
import zahidImg from "../assets/zahid2.jpg";
import cv from "../assets/zahid_hussain_cv.pdf";

const roles = [
  "Full Stack Laravel Developer",
  "PHP Backend Architect",
  "REST API Developer",
  "Web Application Developer",
];

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        65
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        30
      );
    } else {
      setDeleting(false);
      setIndex((p) => (p + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="text-cyan-400 font-semibold inline-flex items-center">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="inline-block w-0.5 h-5 bg-cyan-400 ml-1 rounded-full"
      />
    </span>
  );
};

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center pt-24 sm:pt-28 pb-16 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-950" : "bg-white"
      }`}
    >
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.35, 1], opacity: [0.15, 0.28, 0.15], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-64 sm:w-96 lg:w-[550px] h-64 sm:h-96 lg:h-[550px] bg-cyan-500 rounded-full blur-[80px] sm:blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.22, 0.1], x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-64 sm:w-96 lg:w-[500px] h-64 sm:h-96 lg:h-[500px] bg-blue-600 rounded-full blur-[80px] sm:blur-[120px]"
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: darkMode
              ? "radial-gradient(#22d3ee 1px, transparent 1px)"
              : "radial-gradient(#0284c7 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 relative z-10 w-full">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 text-center lg:text-left max-w-2xl w-full">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs font-semibold tracking-wide mb-5 shadow-sm shadow-cyan-500/10 backdrop-blur-md"
            style={{
              borderColor: darkMode ? "rgba(34,211,238,0.3)" : "rgba(14,165,233,0.3)",
              backgroundColor: darkMode ? "rgba(34,211,238,0.08)" : "rgba(14,165,233,0.08)",
              color: "#22d3ee",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[10px] sm:text-xs">Available for Projects & Hiring</span>
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 animate-pulse" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-[1.15] mb-3 sm:mb-4 tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500">
              Zahid Hussain
            </span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-5 min-h-[32px] sm:min-h-[36px] flex items-center justify-center lg:justify-start ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <Typewriter />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className={`text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Senior Full-Stack & Backend Engineer specializing in{" "}
            <strong className={darkMode ? "text-cyan-400" : "text-cyan-600"}>PHP Laravel</strong>
            , robust REST APIs, RBAC systems, and optimized MySQL databases.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(34,211,238,0.4)" }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-gray-950 px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-cyan-500/25 inline-flex items-center justify-center gap-2 group transition-all"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={cv}
              download="Zahid_Hussain_CV.pdf"
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm border-2 inline-flex items-center justify-center gap-2.5 transition-all backdrop-blur-md ${
                darkMode
                  ? "border-cyan-400/40 text-white hover:bg-cyan-400/10 hover:border-cyan-400"
                  : "border-cyan-500/50 text-gray-900 hover:bg-cyan-50 hover:border-cyan-600"
              }`}
            >
              <Download className="w-4 h-4 text-cyan-400 stroke-[2.5]" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800/40 max-w-sm sm:max-w-lg mx-auto lg:mx-0"
          >
            {[
              { num: "2+", label: "Years Exp.", icon: Briefcase },
              { num: "4+", label: "Live Projects", icon: Layers },
              { num: "100%", label: "Satisfaction", icon: ShieldCheck },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-1 mb-1">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 stroke-[2.2]" />
                    <span className="text-xl sm:text-2xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      {stat.num}
                    </span>
                  </div>
                  <span className={`text-[10px] sm:text-xs font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Column: Avatar Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, type: "spring", stiffness: 70 }}
          className="flex-shrink-0 relative flex justify-center items-center mt-2 lg:mt-0"
        >
          <div className="relative">
            {/* Spinning Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full border border-dashed border-cyan-400/40"
              style={{ inset: "-16px" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full border border-dotted border-blue-500/30"
              style={{ inset: "-30px" }}
            />

            {/* Glow */}
            <motion.div
              animate={{ opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-40"
            />

            {/* Avatar */}
            <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden relative z-10 ring-4 ring-cyan-400/40 shadow-2xl shadow-cyan-500/25 group">
              <img
                src={zahidImg}
                alt="Zahid Hussain - Laravel Developer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Pill 1 - Top Right */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl text-[10px] sm:text-xs font-bold shadow-xl bg-gray-900/90 border border-cyan-400/40 backdrop-blur-md text-white flex items-center gap-1.5 sm:gap-2"
            >
              <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
              </div>
              <span>Laravel Specialist</span>
            </motion.div>

            {/* Floating Pill 2 - Middle Left */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl text-[10px] sm:text-xs font-bold shadow-xl bg-gray-900/90 border border-blue-500/40 backdrop-blur-md text-white flex items-center gap-1.5 sm:gap-2"
            >
              <div className="p-1 rounded-lg bg-blue-500/20 text-blue-400">
                <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
              </div>
              <span>REST API & MySQL</span>
            </motion.div>

            {/* Floating WhatsApp Pill - Bottom Right */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              href="https://wa.me/923057009210?text=Hi%20Zahid,%20I%20visited%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-3 -right-1 sm:-bottom-4 sm:-right-2 z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl text-[10px] sm:text-xs font-bold shadow-xl bg-gray-900/95 border border-emerald-400/50 backdrop-blur-md text-white flex items-center gap-1.5 sm:gap-2 cursor-pointer"
            >
              <div className="p-1 sm:p-1.5 rounded-xl bg-emerald-500 text-gray-950">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="text-emerald-400 font-bold">WhatsApp</span>
            </motion.a>

            {/* Zap Badge - Top Left */}
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 -left-2 sm:top-4 sm:-left-4 z-20 p-2 sm:p-2.5 rounded-2xl shadow-xl bg-cyan-400 text-gray-950 flex items-center justify-center"
            >
              <Zap className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current stroke-[2.5]" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 z-10"
      >
        <a
          href="#services"
          className={`text-[10px] font-bold tracking-widest uppercase flex flex-col items-center gap-1.5 transition-colors ${
            darkMode ? "text-gray-500 hover:text-cyan-400" : "text-gray-400 hover:text-cyan-600"
          }`}
        >
          <span>Scroll Down</span>
          <div className="w-5 h-8 border-2 border-cyan-400/40 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-400 rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
