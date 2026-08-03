import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Terminal,
  Cpu,
  CheckCircle2,
  Sparkles,
  Layers,
  Check,
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Frameworks",
    icon: Code2,
    skills: [
      { name: "PHP (OOP & Core)", percent: 92 },
      { name: "Laravel (v9 / v10 / v11)", percent: 90 },
      { name: "RESTful APIs & Sanctum", percent: 85 },
      { name: "Spatie Permission (RBAC)", percent: 88 },
    ],
  },
  {
    title: "Databases & Architecture",
    icon: Database,
    skills: [
      { name: "MySQL Schema & Queries", percent: 88 },
      { name: "Eloquent ORM & Relations", percent: 90 },
      { name: "Database Optimization", percent: 82 },
    ],
  },
  {
    title: "Frontend & Ecosystem",
    icon: Terminal,
    skills: [
      { name: "JavaScript (ES6+)", percent: 78 },
      { name: "AJAX & Dynamic UI", percent: 85 },
      { name: "jQuery & Blade Templates", percent: 85 },
      { name: "Bootstrap 5 & Tailwind CSS", percent: 82 },
      { name: "Git & GitHub Version Control", percent: 80 },
      { name: "React (Basics)", percent: 45 },
    ],
  },
];

const techPills = [
  "Laravel 11",
  "PHP 8.x",
  "MySQL",
  "REST API",
  "Spatie RBAC",
  "Eloquent ORM",
  "Blade",
  "Sanctum",
  "JavaScript",
  "jQuery",
  "AJAX",
  "Bootstrap 5",
  "Tailwind CSS",
  "Git / GitHub",
  "Postman",
  "Vite",
];

const softSkills = [
  "Complex Problem Solving",
  "Clean & Maintainable Code",
  "Cross-Team Collaboration",
  "Time & Task Management",
  "API Design Patterns",
  "Debugging & Diagnostics",
];

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`py-28 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px]"
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
            <span>Technical Proficiency</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Technologies
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 rounded-full" />
        </motion.div>

        {/* Categorized Progress Bars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.12 }}
                className={`p-7 rounded-3xl border ${
                  darkMode
                    ? "bg-gray-800/40 border-gray-700/60 shadow-xl"
                    : "bg-white border-gray-200/80 shadow-lg"
                }`}
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/20">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h3
                    className={`text-lg font-bold font-heading ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Progress bars list */}
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span
                          className={`text-xs font-semibold ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 text-xs font-extrabold">
                          {skill.percent}%
                        </span>
                      </div>
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden ${
                          darkMode ? "bg-gray-900" : "bg-gray-200"
                        }`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: catIdx * 0.1 + i * 0.08,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 relative"
                        >
                          <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-md shadow-cyan-400"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Pills & Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-8 p-8 rounded-3xl border ${
              darkMode ? "bg-gray-800/40 border-gray-700/60" : "bg-white border-gray-200/80"
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <h3
                className={`text-xl font-bold font-heading ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Technologies & Tools Ecosystem
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {techPills.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-default ${
                    darkMode
                      ? "bg-gray-900/80 border-gray-700 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-400/10"
                      : "bg-gray-50 border-gray-200 text-cyan-700 hover:border-cyan-500 hover:bg-cyan-50 hover:shadow-md"
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-4 p-8 rounded-3xl border ${
              darkMode ? "bg-gray-800/40 border-gray-700/60" : "bg-white border-gray-200/80"
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <h3
                className={`text-xl font-bold font-heading ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Key Strengths
              </h3>
            </div>
            <div className="space-y-3">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 text-xs font-semibold p-2.5 rounded-xl border transition-all ${
                    darkMode
                      ? "bg-gray-900/50 border-gray-800 text-gray-300"
                      : "bg-gray-50 border-gray-100 text-gray-700"
                  }`}
                >
                  <div className="w-5 h-5 rounded-md bg-cyan-400/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
