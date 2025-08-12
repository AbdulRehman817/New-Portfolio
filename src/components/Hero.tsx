import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const handleScrollToContact = () => {
    const section = document.getElementById("Contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [text] = useTypewriter({
    words: ["Full Stack Developer", "UI/UX Designer", "Problem Solver"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 40,
  });

  const socialLinks = [
    { icon: Github, href: "https://github.com/AbdulRehman817" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/abdulrehman1718/" },
    { icon: Mail, href: "mailto:abdulrehmanbey1718@gmail.com" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gray-900 text-center px-4 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#4b556330_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

      {/* Soft Gradient Light Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[180px]"
        animate={{ x: ["-10%", "10%", "-10%"], y: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent mb-3 tracking-tight drop-shadow-md relative z-10"
      >
        Abdul Rehman
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-lg md:text-xl text-gray-400 mb-6 relative z-10"
      >
        Crafting clean & modern web solutions
      </motion.p>

      {/* Typewriter with color animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl font-medium h-[28px] mb-10 animate-colorChange relative z-10"
      >
        {text}
      </motion.div>

      {/* Social Links - floating animation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex gap-6 mb-12 relative z-10"
      >
        {socialLinks.map(({ icon: Icon, href }, i) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.2,
              rotate: 4,
              boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all shadow-md"
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <div className="flex gap-5 relative z-10">
        <motion.a
          href="/resume.pdf"
          download
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-blue-500 text-white rounded-full font-medium transition-all shadow-md"
        >
          Download Resume
        </motion.a>
        <motion.a
          onClick={handleScrollToContact}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.6)",
          }}
          className="cursor-pointer px-6 py-2  text-white rounded-full font-medium transition-all shadow-md"
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
}
