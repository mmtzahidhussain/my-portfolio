import { motion } from "framer-motion";
import { Star, Quote, Sparkles, UserCheck, Building2 } from "lucide-react";

const testimonials = [
  {
    name: "Muhammad Asif",
    role: "CEO, IT Work Center",
    text: "Zahid delivered exceptional work on our training institute web application. His deep Laravel expertise helped us launch on schedule with zero technical glitches. Exceptionally professional, reliable, and communicative.",
    rating: 5,
    avatarBg: "from-cyan-400 to-blue-600",
  },
  {
    name: "Junaid Ibrahim",
    role: "Manager, Mighty Media",
    text: "Working alongside Zahid was an absolute pleasure. He single-handedly developed and maintained multiple production web apps with clean, self-documenting code. Highly recommended for any serious Laravel development.",
    rating: 5,
    avatarBg: "from-purple-400 to-pink-600",
  },
  {
    name: "Ayesha Kainat",
    role: "Project Lead",
    text: "Zahid architected our procurement management system from the ground up. The custom Spatie RBAC implementation was flawlessly tailored to our enterprise requirements. Highly talented backend developer!",
    rating: 5,
    avatarBg: "from-emerald-400 to-teal-600",
  },
];

const Testimonials = ({ darkMode }) => {
  return (
    <section
      id="testimonials"
      className={`py-28 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[170px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-extrabold tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Endorsements</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            What Clients & Leads{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Say
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                darkMode
                  ? "bg-gray-800/40 border-gray-700/60 hover:border-cyan-400/40 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-cyan-500/10"
                  : "bg-white border-gray-200/80 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
              }`}
            >
              <div>
                {/* Quote Icon & Star Ratings */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-cyan-400">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current text-cyan-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-cyan-400/20 stroke-[1.5]" />
                </div>

                {/* Quote Text */}
                <p
                  className={`text-sm leading-relaxed mb-8 italic ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-700/20">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-tr ${t.avatarBg} flex items-center justify-center text-gray-950 font-extrabold text-base shadow-md flex-shrink-0`}
                >
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <h4
                    className={`text-sm font-bold font-heading truncate ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t.name}
                  </h4>
                  <p
                    className={`text-xs font-medium truncate ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
