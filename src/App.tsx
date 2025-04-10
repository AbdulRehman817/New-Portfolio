import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import EducationAndCourses from "./components/EducationAndCourses";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import PalestineFlag from "./components/PalestineFlag";

function App() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.main
        className="bg-gray-900 text-white relative"
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        <ParticleBackground />
        <PalestineFlag />

        <motion.div
          className="fixed inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div className="relative z-10" variants={sectionVariants}>
          <Hero />
        </motion.div>

        <motion.div className="relative z-10" variants={sectionVariants}>
          <About />
        </motion.div>

        <motion.div className="relative z-10" variants={sectionVariants}>
          <WhatIDo />
        </motion.div>

        <motion.div className="relative z-10" variants={sectionVariants}>
          <Skills />
        </motion.div>

        <motion.div className="relative z-10" variants={sectionVariants}>
          <EducationAndCourses />
        </motion.div>

        <motion.div className="relative z-10" variants={sectionVariants}>
          <Projects />
        </motion.div>

        <motion.div className="relative z-10" variants={sectionVariants}>
          <Contact />
        </motion.div>

        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-4 bg-blue-500 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}

export default App;
