import { useInView } from "react-intersection-observer";
import { Code2, Star, Coffee, Users, Zap, Heart, LucideIcon } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

type Stat = {
  icon: LucideIcon;
  value: number;
  label: string;
  color: string;
};

export default function About(): JSX.Element {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats: Stat[] = [
    { icon: Coffee, value: 0, label: "Coffee Cups", color: "from-amber-500 to-orange-500" },
    { icon: Code2, value: 10, label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
    { icon: Users, value: 5, label: "Happy Clients", color: "from-green-500 to-emerald-500" },
    { icon: Star, value: 1, label: "Years Experience", color: "from-purple-500 to-pink-500" },
  ];

  const skills: string[] = ["React", "TypeScript", "Next.js", "TailwindCSS", "MongoDB"];

  return (
    <section ref={ref} className="py-16 px-4 bg-gray-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto space-y-10 text-center"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a Full Stack Developer focused on building clean, fast, and modern web apps.
          I love crafting sleek UIs and powerful backends using today's best tech.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div
              key={label}
              className="bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-full bg-gradient-to-br ${color}`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className={`text-2xl font-semibold`}>
                {inView && <CountUp end={value} duration={2} />}
                {value === 5 && "+"}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center justify-center gap-2">
            <Zap className="text-blue-500 w-5 h-5" />
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-full text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
          <Heart className="w-4 h-4 text-red-500" />
          Passionate about beautiful code & great user experience
        </div>
      </motion.div>
    </section>
  );
}
