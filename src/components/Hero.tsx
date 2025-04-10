import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Sparkles, Rocket, Star } from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";
import gsap from "gsap";

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = backgroundRef.current;
    if (!bg) return;

    const particles = Array.from({ length: 50 }).map(() => {
      const el = document.createElement("div");
      el.className = "absolute w-1 h-1 bg-blue-500/30 rounded-full";
      bg.appendChild(el);
      gsap.set(el, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
      gsap.to(el, {
        x: "+=" + (Math.random() * 100 - 50),
        y: "+=" + (Math.random() * 100 - 50),
        opacity: Math.random(),
        duration: 2 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
      return el;
    });

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    return () => {
      particles.forEach(p => bg.removeChild(p));
    };
  }, []);

  const [text] = useTypewriter({
    words: ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const socialLinks = [
    { icon: Github, href: "https://github.com/AbdulRehman817", rotate: 5 },
    { icon: Linkedin, href: "https://linkedin.com/in/abdul-rehman-7aa108328/", rotate: -5 },
    { icon: Mail, href: "mailto:abdulrehmanbey1718@gmail.com", rotate: 5 },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <motion.div
        ref={containerRef}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
        }}
      >
        <motion.div
          className="mb-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div className="w-32 h-32 mx-auto relative" whileHover={{ scale: 1.1 }}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="relative w-full h-full rounded-full bg-gray-900 flex items-center justify-center border-2 border-blue-500/30"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <Sparkles className="w-16 h-16 text-blue-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 relative">
          <h1 className="text-8xl md:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 animate-gradient leading-none">
            A Rehman
          </h1>
          <motion.p className="text-3xl md:text-4xl text-gray-400 font-light">
            Crafting Digital Experiences
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="text-2xl md:text-3xl text-gray-300 mb-8 h-[40px] flex items-center justify-center gap-2">
          <Code2 className="w-8 h-8 text-blue-500" />
          <span>{text}</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
          {socialLinks.map(({ icon: Icon, href, rotate }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              whileHover={{ scale: 1.1, rotate }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <Icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors relative z-10" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="flex justify-center gap-4">
          <a href="/resume.pdf" download>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Download Resume
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </a>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-blue-500/50 text-white rounded-full font-semibold hover:border-blue-500 transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Contact Me
            </span>
            <motion.div
              className="absolute inset-0 bg-blue-500/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}