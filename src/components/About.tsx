import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { value: 10, label: "Projects Completed" },
    { value: 5, label: "Happy Clients" },
    { value: 1, label: "Years Experience" },
  ];

  return (
    <section ref={ref} className="py-16 px-4 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center space-y-10"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a Full Stack Developer focused on building clean, fast, and modern web apps. I love crafting sleek UIs and powerful backends using today's best tech.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-900 rounded-xl p-6 shadow-md"
            >
              <h3 className="text-3xl font-bold">
                {inView && <CountUp end={stat.value} duration={2} />}
                {stat.label === "Happy Clients" && "+"}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}