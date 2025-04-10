import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiFigma,
  SiNodedotjs,
  SiGit,
  SiAppwrite,
  SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skill 1: React */}
          <motion.div
            variants={skillVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-3 bg-gray-900 rounded-lg"
              >
                <SiReact className="text-blue-400 w-6 h-6" />
              </motion.div>
              <div className="text-white font-medium">React</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-sm">60%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "60%" } : {}}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
              />
            </div>
          </motion.div>

          {/* Skill 2: TypeScript */}
          <motion.div
            variants={skillVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-3 bg-gray-900 rounded-lg"
              >
                <SiTypescript className="text-indigo-400 w-6 h-6" />
              </motion.div>
              <div className="text-white font-medium">TypeScript</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-sm">55%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "55%" } : {}}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-400"
              />
            </div>
          </motion.div>

          {/* Skill 3: Next.js */}
          <motion.div
            variants={skillVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-3 bg-gray-900 rounded-lg"
              >
                <SiNextdotjs className="text-white w-6 h-6" />
              </motion.div>
              <div className="text-white font-medium">Next.js</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-sm">60%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "60%" } : {}}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-400"
              />
            </div>
          </motion.div>

          {/* Skill 4: Figma */}
          <motion.div
            variants={skillVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-3 bg-gray-900 rounded-lg"
              >
                <SiFigma className="text-pink-400 w-6 h-6" />
              </motion.div>
              <div className="text-white font-medium">Figma</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-sm">40%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "40%" } : {}}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-400"
              />
            </div>
          </motion.div>

          {/* Skill 5: Node.js */}
          <motion.div
            variants={skillVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-3 bg-gray-900 rounded-lg"
              >
                <SiNodedotjs className="text-green-400 w-6 h-6" />
              </motion.div>
              <div className="text-white font-medium">Node.js</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-sm">50%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "50%" } : {}}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
              />
            </div>
          </motion.div>

          {/* Skill 6: Git */}
          <motion.div
            variants={skillVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-3 bg-gray-900 rounded-lg"
              >
                <SiGit className="text-orange-400 w-6 h-6" />
              </motion.div>
              <div className="text-white font-medium">Git</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-sm">50%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "50%" } : {}}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-400"
              />
            </div>
          </motion.div>
          {/* Skill 7: AppWrite */}
          <motion.div
            variants={skillVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-3 bg-gray-900 rounded-lg"
              >
                <SiAppwrite className="text-pink-500 w-6 h-6" />
              </motion.div>
              <div className="text-white font-medium">AppWrite</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-sm">70%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "70%" } : {}}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-pink-500 to-red-400"
              />
            </div>
          </motion.div>
          {/* Skill 8: Firebase */}
          <motion.div
            variants={skillVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-3 bg-gray-900 rounded-lg"
              >
                <SiFirebase className="text-yellow-500 w-6 h-6" />
              </motion.div>
              <div className="text-white font-medium">Firebase</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-sm">70%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "70%" } : {}}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
