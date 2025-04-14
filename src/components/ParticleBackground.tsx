import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="absolute inset-0 -z-10"
      style={{ willChange: "transform" }} // Hint to browser to optimize transform
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60, // Lower FPS for smoother performance
          interactivity: {
            events: {
              onHover: {
                enable: false, // Disable hover for better performance
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 100, // Reduced link distance
              enable: true,
              opacity: 0.1, // Reduced opacity for lighter feel
              width: 0.5, // Thinner links
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.8, // Slower movement
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600, // Reduced density area
              },
              value: 50, // Reduced particle count
            },
            opacity: {
              value: 0.1, // Lower opacity for softer effect
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 }, // Smaller particles
            },
          },
          detectRetina: true,
        }}
      />
    </motion.div>
  );
}
