import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          I’m a Full Stack Developer passionate about crafting smooth, modern,
          and responsive web applications. I enjoy turning ideas into reality
          using the latest web technologies. Whether it’s building clean UI/UX
          or managing robust backend logic, I focus on writing efficient and
          elegant code that solves real-world problems.
        </p>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          My journey in development started with curiosity and has grown into a
          mission to build meaningful digital experiences. I'm always exploring
          new tools, refining my skills, and staying inspired by design and
          technology.
        </p>
      </motion.div>
    </section>
  );
}
