import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";

const projects = [
  {
    id: "it-work-center",
    title: "IT Work Center",
    category: "Education",
    desc: "Comprehensive IT Training Institute web platform featuring dynamic course management, online student enrollment, blog management, and instructor profiles.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "Blade"],
    live: "https://itwork.center/",
    gradient: "from-cyan-400 to-blue-600",
    badge: "Live Enterprise Site",
    features: ["Course Management System", "Student Enrollment Portal", "SEO Optimized Blog"],
  },
  {
    id: "procurement-system",
    title: "Procurement Management System",
    category: "SaaS",
    desc: "Complete enterprise procurement ecosystem built with Spatie RBAC permissions, purchase order workflows, vendor tracking, and real-time reporting dashboards.",
    tech: ["Laravel", "Spatie Permission", "MySQL", "jQuery", "AJAX"],
    live: "https://procurement.itwork.center/",
    gradient: "from-purple-400 to-pink-600",
    badge: "SaaS Application",
    features: ["Spatie RBAC Roles & Permissions", "Purchase Order Workflow", "AJAX Analytics Dashboard"],
  },
  {
    id: "digital-design-bundles",
    title: "Digital Design Bundles",
    category: "E-Commerce",
    desc: "High-speed digital asset e-commerce platform allowing graphic designers to browse, cart, and securely purchase digital graphic bundles.",
    tech: ["Laravel", "PHP Core", "MySQL", "JavaScript", "REST APIs"],
    live: "https://digitaldesignbundles.com/",
    gradient: "from-emerald-400 to-teal-600",
    badge: "E-Commerce Platform",
    features: ["Digital Downloads Store", "Cart & Authentication", "Asset Filtering System"],
  },
  {
    id: "attendance-management",
    title: "Attendance & Employee Portal",
    category: "Enterprise",
    desc: "RBAC-driven automated attendance tracking system using Spatie. Supports 12-hour shift check-in/out, automated summaries, and daily audit reports.",
    tech: ["Laravel 11", "Spatie Permission", "Bootstrap 5", "MySQL"],
    live: null,
    gradient: "from-amber-400 to-orange-600",
    badge: "Internal Enterprise Tool",
    features: ["Automated Check-in / Check-out", "12-Hour Shift Calculators", "Audit Logs & Export"],
  },
  {
    id: "ryk-solar",
    title: "RYK Solar – Solar Services Platform",
    category: "Business",
    desc: "Full-featured solar energy services website for RYK Solar with multi-branch support (Rahim Yar Khan & Lahore), dynamic service filtering, WhatsApp inquiry integration, free quote request system, team profiles, and project showcase gallery.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "jQuery", "AJAX"],
    live: "https://dev.360solutions.biz/",
    gradient: "from-yellow-400 to-amber-600",
    badge: "Solar & Energy",
    features: ["Multi-Branch Service Filtering", "Free Quote Request Form", "WhatsApp Inquiry Integration"],
  },
  {
    id: "nuritron-pharmacy",
    title: "Nuritron – Online Pharmacy Store",
    category: "E-Commerce",
    desc: "Modern full-featured e-commerce pharmacy platform \"Nuritron\" with product shop, category filtering, cart system, user authentication (login/register), online consultants directory, blog management, and SEO-optimized pages.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "Blade", "Swiper.js"],
    live: "https://nuritron.pharmacy360.org/",
    gradient: "from-green-500 to-emerald-700",
    badge: "Pharmacy E-Commerce",
    features: ["Product Shop & Cart System", "Online Consultants Directory", "Blog & SEO Integration"],
  },
];

const categories = ["All", "Education", "SaaS", "E-Commerce", "Enterprise", "Business"];

const Projects = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className={`py-28 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-950" : "bg-white"
      }`}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-purple-600 rounded-full blur-[160px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-extrabold tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Featured Portfolio</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Selected{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Projects
                </span>
              </h2>
            </div>
            <p
              className={`max-w-md text-sm sm:text-base leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Real-world web applications showcasing backend architecture, RBAC security, and API integrations.
            </p>
          </div>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-6 rounded-full" />
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "text-gray-950"
                    : darkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-900"
                      : "text-gray-600 hover:text-gray-950 hover:bg-gray-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md shadow-cyan-400/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  darkMode
                    ? "bg-gray-900/50 border-gray-800 hover:border-cyan-400/40 hover:bg-gray-900/90 hover:shadow-2xl hover:shadow-cyan-500/10"
                    : "bg-gray-50 border-gray-200/80 hover:border-cyan-500/40 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/10"
                }`}
              >
                {/* Top Accent Gradient Header */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${p.gradient} group-hover:h-3 transition-all duration-300`}
                />

                <div className="p-8">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
                      {p.badge}
                    </span>
                    {p.live ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        title="View Live Application"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-semibold text-gray-500 px-2.5 py-0.5 rounded-full border border-gray-700">
                        Internal Application
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-bold font-heading mb-3 transition-colors group-hover:text-cyan-400 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {p.desc}
                  </p>

                  {/* Key Feature Highlights */}
                  <div className="mb-6 space-y-2">
                    {p.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 text-xs font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700/20">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[11px] font-semibold px-3 py-1 rounded-lg border ${
                          darkMode
                            ? "bg-gray-800/80 border-gray-700 text-cyan-300"
                            : "bg-cyan-50 border-cyan-200 text-cyan-800"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action Link */}
                {p.live && (
                  <div className="px-8 pb-8 pt-0">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider py-3 rounded-xl bg-gradient-to-r ${p.gradient} text-white shadow-md transition-all`}
                    >
                      <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                      <span>Launch Project</span>
                    </motion.a>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
