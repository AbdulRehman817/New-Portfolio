import { useInView } from "react-intersection-observer";
import { Code2, Star, Coffee, Users, Zap, Heart } from "lucide-react";
import CountUp from "react-countup";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { icon: Coffee, value: 0, label: "Coffee Cups", color: "from-amber-500 to-orange-500" },
    { icon: Code2, value: 10, label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
    { icon: Users, value: 5, label: "Happy Clients", color: "from-green-500 to-emerald-500" },
    { icon: Star, value: 1, label: "Years Experience", color: "from-purple-500 to-pink-500" },
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "Next.js", "TailwindCSS", "PostgreSQL", "MongoDB"
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-10 text-gray-300">
          <div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              About Me
            </h2>
            <p className="mt-3 text-lg">
              I'm a passionate Full Stack Developer building modern web applications.
              I specialize in creating beautiful, performant, and accessible web experiences
              using cutting-edge technologies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="p-4 bg-gray-800/50 rounded-xl text-center border border-gray-700/50">
                <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-lg bg-gray-700/50">
                  <Icon className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-br ${color}`} />
                </div>
                <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br ${color}`}>
                  {inView && <CountUp end={value} duration={2} />}
                  {value === 5 && "+"}
                </h3>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-blue-500" />
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 bg-gray-800/50 rounded-full text-sm border border-gray-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center gap-2 text-gray-400">
            <Heart className="w-5 h-5 text-red-500" />
            <span>Passionate about creating amazing web experiences</span>
          </div>
        </div>
      </div>
    </section>
  );
}
