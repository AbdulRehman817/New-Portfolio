import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Rocket,
  Star,
  Zap,
  Award,
  Coffee,
  Heart,
  Users,
} from "lucide-react";
import CountUp from "react-countup";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    {
      icon: Coffee,
      value: 0,
      label: "Coffee Cups",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Code2,
      value: 10,
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      value: 5,
      label: "Happy Clients",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Star,
      value: 1,
      label: "Years Experience",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "TailwindCSS",
    "PostgreSQL",
    "MongoDB",
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative group">
            <motion.div
              className="aspect-square rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay"
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-gray-800/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-500" />
                <span className="text-white font-semibold">
                  Top Rated Developer
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-blue-500" />
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  About Me
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer building modern web
                applications. I specialize in creating beautiful, performant,
                and accessible web experiences using cutting-edge technologies.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl text-center relative overflow-hidden group border border-gray-700/50"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gray-700/50 backdrop-blur-sm flex items-center justify-center"
                  >
                    <stat.icon
                      className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-br ${stat.color}`}
                    />
                  </motion.div>
                  <h3
                    className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br ${stat.color}`}
                  >
                    {inView && (
                      <CountUp end={stat.value} duration={2.5} separator="," />
                    )}
                    {stat.value === 5 && "+"}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-blue-500" />
                <h3 className="text-xl font-semibold text-white">
                  Skills & Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-300 hover:bg-gray-700/50 transition-colors border border-gray-700/50"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-gray-400"
            >
              <Heart className="w-5 h-5 text-red-500" />
              <span>Passionate about creating amazing web experiences</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
