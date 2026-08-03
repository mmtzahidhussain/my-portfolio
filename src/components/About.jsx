import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Globe2,
  Briefcase,
  Calendar,
  Building2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const cards = [
  { icon: User, label: "Full Name", value: "Zahid Hussain" },
  { icon: Mail, label: "Email Address", value: "jamzahid1999@gmail.com", href: "mailto:jamzahid1999@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 305 7009210", href: "tel:03057009210" },
  { icon: MapPin, label: "Location", value: "Rahim Yar Khan, Pakistan" },
  { icon: GraduationCap, label: "Education", value: "BS Computer Science" },
  { icon: Globe2, label: "Languages", value: "English, Urdu" },
];

const experience = [
  {
    company: "Mighty Media Technologies",
    role: "PHP Laravel Developer",
    period: "Present",
    desc: "Architecting scalable web applications, REST APIs, e-commerce solutions, AJAX dynamic interfaces, and custom Laravel Blade dashboards.",
    highlight: "Current Role",
  },
  {
    company: "Hellow World Technologies",
    role: "PHP Laravel Developer",
    period: "2 Months",
    desc: "Worked on backend modules, database query optimizations, RESTful APIs, and Spatie RBAC integration.",
    highlight: "Previous Role",
  },
];

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-28 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-950" : "bg-white"
      }`}
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 border border-cyan-400/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] border border-blue-500/10 rounded-full"
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
            <span>Professional Profile</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Me
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Interactive Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div
              className={`p-8 rounded-3xl border backdrop-blur-md ${
                darkMode ? "bg-gray-900/50 border-gray-800" : "bg-gray-50 border-gray-200/80"
              }`}
            >
              <h3
                className={`text-2xl font-bold font-heading mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Passionate Laravel Backend & Full Stack Engineer
              </h3>
              <p
                className={`text-base leading-relaxed mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                With over <strong className="text-cyan-400">2 years</strong> of dedicated hands-on experience in web development, I focus on constructing robust, secure, and maintainable web applications using <strong className="text-cyan-400">PHP Laravel</strong>.
              </p>
              <p
                className={`text-base leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                My expertise spans Eloquent ORM optimization, complex SQL database schema design, RESTful API development, AJAX asynchronous data handling, and Spatie permission architecture.
              </p>
            </div>

            {/* Experience Timeline */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <h3
                  className={`text-xl font-bold font-heading ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Work Experience
                </h3>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:to-blue-600/20">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative pl-12"
                  >
                    {/* Glowing Node Marker */}
                    <div className="absolute left-4 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-gray-950 shadow-md shadow-cyan-400/50" />

                    <div
                      className={`p-6 rounded-2xl border transition-all duration-300 ${
                        darkMode
                          ? "bg-gray-900/60 border-gray-800 hover:border-cyan-400/40"
                          : "bg-gray-50 border-gray-200 hover:border-cyan-500/40"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-cyan-400" />
                          <h4
                            className={`font-bold text-base font-heading ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {exp.company}
                          </h4>
                        </div>
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
                          {exp.highlight}
                        </span>
                      </div>

                      <p className="text-cyan-400 text-xs font-semibold mb-2">
                        {exp.role}
                      </p>

                      <div
                        className={`flex items-center gap-1.5 text-xs mb-3 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>{exp.period}</span>
                      </div>

                      <p
                        className={`text-xs leading-relaxed ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {exp.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Personal Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className={`p-5 rounded-2xl border transition-all flex items-center gap-4 ${
                      darkMode
                        ? "bg-gray-900/60 border-gray-800 hover:border-cyan-400/40 hover:bg-gray-900"
                        : "bg-gray-50 border-gray-200/80 hover:border-cyan-500/40 hover:bg-white"
                    }`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-medium ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {card.label}
                      </p>
                      {card.href ? (
                        <a
                          href={card.href}
                          className="text-sm font-bold text-cyan-400 hover:underline truncate block"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <p
                          className={`text-sm font-bold truncate ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {card.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Core Values Badge Card */}
            <div
              className={`p-6 rounded-2xl border ${
                darkMode ? "bg-gradient-to-br from-cyan-950/40 to-blue-950/30 border-cyan-500/20" : "bg-cyan-50/70 border-cyan-200"
              }`}
            >
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Work Philosophy
              </h4>
              <ul className={`text-xs space-y-2 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Writing clean, self-documenting code.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Prioritizing security, RBAC, and data privacy.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Continuous learning & seamless team collaboration.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
