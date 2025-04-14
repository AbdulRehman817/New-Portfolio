import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap } from "lucide-react";

export default function EducationAndCourses() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const learningPath = [
    {
      title: "Matriculation – Student Academy",
      period: "2018 – 2020",
      description:
        "Completed matric with science subjects, focusing on Mathematics and Computer Science.",
    },
    {
      title: "Intermediate – DJ Science Government College",
      period: "2023 – Present",
      description:
        "Currently pursuing Computer Science, focusing on programming fundamentals and analytical thinking.",
    },
    {
      title: "Saylani Mass IT Training Program",
      period: "2023",
      description:
        "Learning Web & App Development including HTML, CSS, JavaScript, React.js, Next.js, and React Native.",
    },
    {
      title: "Certificate – Saylani Mass IT Training Program",
      period: "2025",
      description:
        "Received official certificate upon completing the course. Showcasing hands-on experience in full-stack development.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
        >
          Education & Courses
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {learningPath.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-500/20"
            >
              <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 rounded-full bg-gray-900 border-2 border-blue-500/20 flex items-center justify-center">
                <GraduationCap size={16} className="text-blue-500" />
              </div>

              <div className="p-6 rounded-2xl bg-gray-900 hover:bg-gray-900/80 transition-transform duration-200 hover:scale-[1.02] hover:translate-x-1">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <div className="text-blue-500 mb-4">{item.period}</div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}