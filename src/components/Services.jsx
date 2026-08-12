import { motion } from "framer-motion";
import {
  Globe,
  Server,
  ShieldCheck,
  Database,
  Zap,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "End-to-end custom web applications built using Laravel. From database architecture to frontend dynamic components, I engineer complete, scalable enterprise systems.",
    color: "from-cyan-400 to-blue-500",
    badge: "Laravel & PHP",
  },
  {
    icon: Server,
    title: "RESTful API Integration",
    desc: "Architecting secure, high-performance REST APIs with Laravel Sanctum/JWT authentication, detailed OpenAPI documentation, and seamless 3rd-party integrations.",
    color: "from-purple-400 to-pink-500",
    badge: "Backend APIs",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control (RBAC)",
    desc: "Granular permission & role management systems powered by Spatie Laravel Permission. Custom guard policies and secure multi-tenant access control.",
    color: "from-emerald-400 to-teal-500",
    badge: "Security & Spatie",
  },
  {
    icon: Database,
    title: "Database Architecture & Query Optimization",
    desc: "Designing scalable MySQL database schemas, writing efficient Eloquent & raw queries, indexing strategies, and removing database bottlenecks.",
    color: "from-amber-400 to-orange-500",
    badge: "MySQL & Eloquent",
  },
  {
    icon: Zap,
    title: "Dynamic Interfaces & AJAX",
    desc: "Crafting real-time user experiences with asynchronous AJAX requests, jQuery, and dynamic dashboards without tedious full-page reloads.",
    color: "from-yellow-400 to-orange-500",
    badge: "AJAX & JS",
  },
  {
    icon: Wrench,
    title: "Laravel Maintenance & Bug Fixing",
    desc: "Codebase audits, refactoring legacy PHP applications, version upgrades, security patches, and ongoing performance optimization.",
    color: "from-blue-400 to-indigo-500",
    badge: "Support & Fixes",
  },
];

const Services = ({ darkMode }) => {
  return (
    <section
      id="services"
      className={`py-16 sm:py-20 lg:py-28 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[140px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-extrabold tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Core Expertise</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Services &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Solutions
                </span>
              </h2>
            </div>
            <p
              className={`max-w-md text-sm sm:text-base leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Specialized full-stack development tailored for scalability, speed, and real-world impact.
            </p>
          </div>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-6 rounded-full" />
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`group relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  darkMode
                    ? "bg-gray-800/40 border-gray-700/60 hover:border-cyan-400/50 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-cyan-500/10"
                    : "bg-white border-gray-200/80 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10"
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${s.color} flex items-center justify-center text-gray-950 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        darkMode
                          ? "bg-gray-900/80 border-gray-700 text-cyan-400"
                          : "bg-gray-100 border-gray-200 text-cyan-700"
                      }`}
                    >
                      {s.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`text-xl font-bold font-heading mb-3 transition-colors group-hover:text-cyan-400 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>

                {/* Bottom Action Arrow */}
                <div className="mt-8 pt-4 border-t border-gray-700/20 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Discuss Project</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
