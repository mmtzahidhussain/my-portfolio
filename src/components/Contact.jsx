import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Sparkles,
  Copy,
  CheckCheck,
  MessageSquare,
} from "lucide-react";

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = ({ darkMode }) => {
  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email Address",
      value: "jamzahid1999@gmail.com",
      href: "mailto:jamzahid1999@gmail.com",
      copyable: true,
      fieldKey: "email",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+92 305 7009210",
      href: "tel:03057009210",
      copyable: true,
      fieldKey: "phone",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/zahid9210",
      href: "https://linkedin.com/in/zahid9210",
      copyable: false,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rahim Yar Khan, Pakistan",
      href: null,
      copyable: false,
    },
  ];

  return (
    <section
      id="contact"
      className={`py-28 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-950" : "bg-white"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.12, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[160px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-extrabold tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Work Together
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards & Copy Click */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <p
              className={`text-base leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I am currently available for full-time Laravel engineering roles, remote contracts, and freelance web projects. Feel free to connect directly!
            </p>

            <div className="space-y-4">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const isCopied = copiedField === item.fieldKey;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 6 }}
                    className={`p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                      darkMode
                        ? "bg-gray-900/60 border-gray-800 hover:border-cyan-400/40 hover:bg-gray-900"
                        : "bg-gray-50 border-gray-200/80 hover:border-cyan-500/40 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center text-gray-950 font-bold shadow-md flex-shrink-0">
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-xs font-medium ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-cyan-400 hover:underline truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            className={`text-sm font-bold truncate ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Copy Button */}
                    {item.copyable && (
                      <button
                        onClick={() => handleCopy(item.value, item.fieldKey)}
                        className={`p-2.5 rounded-xl border transition-all flex-shrink-0 ${
                          isCopied
                            ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                            : darkMode
                              ? "bg-gray-800 border-gray-700 text-gray-400 hover:text-white hover:border-cyan-400/40"
                              : "bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:border-cyan-500/40"
                        }`}
                        title="Copy to clipboard"
                        aria-label="Copy to clipboard"
                      >
                        {isCopied ? (
                          <CheckCheck className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Copy className="w-4 h-4 stroke-[2]" />
                        )}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div
              className={`p-8 sm:p-10 rounded-3xl border ${
                darkMode
                  ? "bg-gray-900/50 border-gray-800 shadow-2xl"
                  : "bg-gray-50 border-gray-200/80 shadow-xl"
              }`}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3
                  className={`text-xl font-bold font-heading ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Send Me a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className={`text-xs font-semibold block mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all ${
                        darkMode
                          ? "bg-gray-800/60 border-gray-700 text-white placeholder-gray-500"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      className={`text-xs font-semibold block mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all ${
                        darkMode
                          ? "bg-gray-800/60 border-gray-700 text-white placeholder-gray-500"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`text-xs font-semibold block mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all ${
                      darkMode
                        ? "bg-gray-800/60 border-gray-700 text-white placeholder-gray-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`text-xs font-semibold block mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Describe your project, timeline, or position details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none ${
                      darkMode
                        ? "bg-gray-800/60 border-gray-700 text-white placeholder-gray-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(34,211,238,0.35)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-gray-950 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
