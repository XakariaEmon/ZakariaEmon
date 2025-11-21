import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import EventsSection from "./components/EventsSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === "cmyk" ? "dark" : "cmyk");
  };

  return (
    <div className="font-sans bg-base-100 text-base-content">
      <Navbar theme={theme} onThemeToggle={handleThemeToggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <EventsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
