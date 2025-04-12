
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
];

const Skills = () => {
  return (
    <section className="py-10 bg-white dark:bg-gray-950" id="skills">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black dark:text-white">My Skills</h2>
        <p className="text-gray-600 dark:text-gray-300">Technologies I work with</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-5 md:px-20">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm text-center font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
