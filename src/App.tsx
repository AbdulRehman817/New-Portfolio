import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PalestineFlag from "./components/PalestineFlag";
import "./styles.css"; // <- make sure to import your styles

function App() {
  return (
    <main className="bg-gray-900 text-white relative">
      {/* Palestine Flag */}
      <PalestineFlag />

      {/* Background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none animate-pulse" />

      {/* Page Sections with Fade-In */}
      <div
        className="relative z-10 fade-slide-up"
        style={{ animationDelay: "0s" }}
      >
        <Hero />
      </div>

      <div
        className="relative z-10 fade-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        <About />
      </div>

      <div
        className="relative z-10 fade-slide-up"
        style={{ animationDelay: "0.4s" }}
      >
        <WhatIDo />
      </div>

      <div
        className="relative z-10 fade-slide-up"
        style={{ animationDelay: "0.6s" }}
      >
        <Skills />
      </div>

      <div
        className="relative z-10 fade-slide-up"
        style={{ animationDelay: "0.8s" }}
      >
        <Projects />
      </div>

      <div
        className="relative z-10 fade-slide-up"
        style={{ animationDelay: "1s" }}
      >
        <Contact />
      </div>

      {/* Scroll to top button */}
      <div
        className="fixed bottom-8 right-8 z-50 fade-slide-up"
        style={{ animationDelay: "1.2s" }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-4 bg-blue-500 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-110 active:scale-90"
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
        </button>
      </div>
    </main>
  );
}

export default App;
