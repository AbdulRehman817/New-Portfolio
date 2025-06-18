import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, X, Code2 } from "lucide-react";
import { useState } from "react";
import Ecommerce from "../images/Ecommerce.png";
import memeMaker from "../images/memeMaker.png";
import ChatApp from "../images/ChatApp.png";

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
  const [modalOpen, setModalOpen] = useState(false);

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
        "A chat app is a real-time messaging platform that allows users to communicate instantly through text, images, or other media.",
      longDescription:"The Chat Application is a full-featured, real-time messaging platform developed using React.js for the frontend and Firebase (Firestore, Realtime Database, Authentication, and Storage) for the backend. It is designed to provide users with a smooth and secure chatting experience, similar to modern messaging platforms like WhatsApp or Messenger.",
      image: `${ChatApp}`,
      tech: ["ReactJS", "TailwindCSS", "Firebase"],
      github: "https://github.com/AbdulRehman817/Chat-App",
      demo: "https://chat-app-sc7o.vercel.app/ChatPage",
    },
  ];

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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
              onClick={() => {
                setSelectedProject(project);
                openModal();
              }}
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {modalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <h2 className="text-3xl text-white">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-400 mt-4">
                    {selectedProject.longDescription}
                  </p>
                  {/* Displaying the image inside the modal */}
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto my-4 rounded-lg"
                  />
                  <div className="mt-6 flex justify-between">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-500 text-white px-4 py-2 rounded flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
