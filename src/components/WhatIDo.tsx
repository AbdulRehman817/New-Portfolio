import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaJsSquare,
  FaPaintBrush,
  FaServer,
  FaNodeJs,
  FaDatabase,
  FaShieldAlt,
  FaCloud,
  FaLayerGroup,
  FaLock,
  FaFire,
} from "react-icons/fa";

interface BadgeProps {
  icon: React.ReactNode;
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, label }) => (
  <div className="flex items-center gap-1 px-3 py-1 bg-gray-800/50 rounded-lg text-xs sm:text-sm text-gray-300">
    {icon}
    {label}
  </div>
);

const Services: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            My Services
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            What I Can Do For You
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Frontend Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg transition-all border border-gray-800"
          >
            <div className="w-14 h-14 mb-6 rounded-2xl bg-gray-800 flex items-center justify-center">
              <FaCode className="text-blue-400 text-2xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
              Frontend Development
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Building responsive and interactive user interfaces using modern
              frameworks like React and Next.js.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge
                icon={<FaReact className="text-blue-400" />}
                label="React"
              />
              <Badge
                icon={<FaJsSquare className="text-blue-400" />}
                label="Next.js"
              />
              <Badge
                icon={<FaCode className="text-blue-400" />}
                label="TypeScript"
              />
              <Badge
                icon={<FaPaintBrush className="text-blue-400" />}
                label="TailwindCSS"
              />
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg transition-all border border-gray-800"
          >
            <div className="w-14 h-14 mb-6 rounded-2xl bg-gray-800 flex items-center justify-center">
              <FaServer className="text-pink-400 text-2xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
              Backend Development
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Developing scalable server-side applications and APIs using
              Node.js and modern databases.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge
                icon={<FaNodeJs className="text-pink-400" />}
                label="Node.js"
              />
              <Badge
                icon={<FaDatabase className="text-pink-400" />}
                label="GraphQL"
              />
              <Badge
                icon={<FaShieldAlt className="text-pink-400" />}
                label="PostgreSQL"
              />
              <Badge
                icon={<FaCloud className="text-pink-400" />}
                label="MongoDB"
              />
            </div>
          </motion.div>

          {/* API Integration Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg transition-all border border-gray-800"
          >
            <div className="w-14 h-14 mb-6 rounded-2xl bg-gray-800 flex items-center justify-center">
              <FaLayerGroup className="text-emerald-400 text-2xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
              API Integration
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Seamlessly connecting web applications to third-party services and
              external APIs for added functionality.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge
                icon={<FaCloud className="text-emerald-400" />}
                label="REST APIs"
              />
              <Badge
                icon={<FaLock className="text-emerald-400" />}
                label="Auth0"
              />
              <Badge
                icon={<FaFire className="text-emerald-400" />}
                label="Firebase"
              />
              <Badge
                icon={<FaServer className="text-emerald-400" />}
                label="AppWrite"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
