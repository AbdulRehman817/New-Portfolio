import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaNodeJs,
  FaFire,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiAuth0,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-700 dark:text-white" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Firebase", icon: <FaFire className="text-orange-400" /> },

  // Tools
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Auth.js", icon: <SiAuth0 className="text-purple-500" /> },
];

const Skills = () => {
  return (
    <section
      className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      id="skills"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          My Skills
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-2">
          Frontend, Backend & Everything In Between
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 md:px-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/80 border border-gray-700 rounded-2xl p-5 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-sm text-center font-medium text-gray-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
