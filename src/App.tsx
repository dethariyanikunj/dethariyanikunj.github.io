import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Background base handling */}
      <div className="absolute inset-0 bg-[#f8fafc] transition-colors duration-500 dark:bg-[#080911]" />
      
      {/* Top ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.18),rgba(0,0,0,0))] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.25),rgba(0,0,0,0))]" />
      
      {/* Top Left Orb — Violet Glow */}
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-600/15" />
      
      {/* Bottom Right Orb — Cyber Cyan Glow */}
      <div className="absolute bottom-20 -right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px] dark:bg-cyan-500/15" />
      
      {/* Center Ambient Orb — Electric Indigo */}
      <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[130px] dark:bg-indigo-600/10" />
      
      {/* Fine SVG grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
