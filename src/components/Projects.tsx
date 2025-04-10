import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, X, Code2, Rocket, Zap } from "lucide-react";
import { useState } from "react";
import Ecommerce from "../images/Ecommerce.png";
import memeMaker from "../images/memeMaker.png";
import WeatherApp from "../images/WeatherApp.png";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with React JS, Mongo DB, and Tailwind CSS.",
      longDescription:
        "The eCommerce website is a modern, fully responsive online store designed to provide a seamless shopping experience across all devices, from mobile to desktop. The platform allows users to browse through a wide range of products, add items to their cart, and securely checkout, all while offering an intuitive and user-friendly interface.",
      image: `${Ecommerce}`,
      tech: ["React.js", "Node JS", "Tailwind CSS", "MONGO DB"],
      github: "https://github.com/AbdulRehman817/E-Commerce-Website-ReactJs",
      demo: "https://e-commerce-website-react-js-gules.vercel.app/",
    },
    {
      title: "Meme Maker App",
      description:
        "This Meme Maker app, built using Next js and TypeScript, allows users to create and customize their own memes with ease.",
      longDescription:
        "The app features a simple and intuitive interface where users can upload images, add custom text, and position it anywhere on the image. It includes options to change the font style, size, and color to ensure creative flexibility. With real-time editing, users can see their meme come to life as they make changes.",
      image: `${memeMaker}`,
      tech: ["Nextjs", "Tailwind CSS", "TypeScript", "API"],
      github: "https://github.com/AbdulRehman817/Meme-Maker",
      demo: "https://meme-maker-126d.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "This weather app, built using JavaScript, provides real-time weather updates for any location.",
      longDescription:
        "Users can search by city name to get the current temperature, weather conditions (like clear skies, rain, or cloudy), humidity, and wind speed. The app uses an API to fetch accurate weather data from a reliable source and displays it in a clean, user-friendly interface. The design is simple yet effective, focusing on delivering essential weather information at a glance. With responsive features, the app works seamlessly across devices, ensuring users can check the weather on the go.",
      image: `${WeatherApp}`,
      tech: ["Javascript", "CSS", "WeatherAPI"],
      github: "https://github.com/AbdulRehman817/Weather-App",
      demo: "https://weather-app-gules-alpha-61.vercel.app/",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundImage: [
            "radial-gradient(circle at 0% 0%, #4f46e5 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #0ea5e9 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, #4f46e5 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Code2 className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Featured Projects
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Explore some of my recent projects showcasing my expertise in
            full-stack development
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden bg-gray-800 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className="aspect-video overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
              <div className="p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    variants={containerVariants}
                  >
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative">
                  <div className="relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full aspect-video object-cover rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="p-6 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Rocket className="w-6 h-6 text-blue-500" />
                      <h3 className="text-2xl font-bold text-white">
                        {selectedProject.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Zap className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">Technologies Used:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-4 py-2 bg-gray-700 rounded-full text-gray-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </motion.a>
                      <motion.a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
