import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa6";
import { navLinks, profile } from "../data/portfolio";

const socialLinks = [
  { href: profile.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: profile.github, label: "GitHub", icon: FaGithub },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    if (href === "#hero" || href === "#") {
      setActiveSection("");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    setActiveSection(href);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navbarOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // If scrolled near top of page (Hero section), deselect all tabs
      if (window.scrollY < 250) {
        setActiveSection("");
        return;
      }

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const offsetThreshold = 100;
      let currentActive = "";

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offsetThreshold) {
            currentActive = `#${sectionId}`;
            break;
          }
        }
      }

      setActiveSection(currentActive);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const nameParts = profile.name.trim().split(" ");
  const firstName = nameParts[0] ?? "";
  const lastName = nameParts.slice(1).join(" ");
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div
        className={`pointer-events-auto relative mx-auto max-w-6xl rounded-3xl transition-all duration-300 ease-out ${
          scrolled
            ? "glass-nav px-4 py-2.5 shadow-2xl"
            : "border border-indigo-500/15 bg-white/80 dark:border-white/10 dark:bg-obsidian-900/60 px-4 py-3 shadow-lg backdrop-blur-md"
        }`}
      >
        {/* Animated Gradient Accent Border Line */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

        <div className="relative z-10 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <a href="#" onClick={(e) => scrollToSection(e, "#hero")} className="group flex min-w-0 items-center gap-3">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-500 text-xs font-bold text-white shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-105">
              <span className="absolute inset-0 rounded-full bg-indigo-400 blur-sm opacity-40 group-hover:opacity-75 transition-opacity" />
              <span className="relative z-10">{initials}</span>
            </span>
            <div className="flex flex-col min-w-0">
              <span className="truncate text-sm font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                {firstName} <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">{lastName}</span>
              </span>
              <span className="hidden sm:inline text-[10px] font-semibold text-slate-500 dark:text-neutral-400">Senior Mobile Engineer</span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden items-center gap-1 rounded-full border border-indigo-500/15 bg-slate-100/80 dark:border-white/10 dark:bg-white/[0.03] p-1.5 backdrop-blur-md lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25"
                      : "text-slate-700 hover:bg-indigo-500/10 hover:text-indigo-600 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons, Theme Toggle & Resume CTA */}
          <div className="flex items-center gap-2">
            
            {/* Theme Switcher Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-indigo-500/20 bg-white/80 dark:border-white/15 dark:bg-white/5 text-slate-700 dark:text-neutral-300 shadow-sm transition-all hover:border-indigo-500 hover:bg-indigo-50 dark:hover:border-indigo-400/50 dark:hover:bg-indigo-500/15 dark:hover:text-indigo-300 hover:scale-105"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <FaSun className="h-4 w-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <FaMoon className="h-4 w-4 text-indigo-600 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            <div className="hidden items-center gap-1.5 md:flex">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-indigo-500/20 bg-white/80 dark:border-white/10 dark:bg-white/5 p-2 text-slate-700 dark:text-neutral-300 transition-all hover:border-indigo-500 hover:bg-indigo-50 dark:hover:border-indigo-400/50 dark:hover:bg-indigo-500/15 dark:hover:text-indigo-300 hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300 transition-all hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white shadow-sm"
              >
                <FaDownload className="text-[10px]" /> Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:text-neutral-200 transition-all lg:hidden hover:bg-indigo-500/20"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Smooth Animated Expansion */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 overflow-hidden border-t border-indigo-500/15 dark:border-white/10 mt-3 px-3 pb-3 pt-3.5 lg:hidden"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-xs font-semibold text-slate-800 dark:text-neutral-200 transition-colors hover:bg-indigo-500/15 hover:text-indigo-600 dark:hover:text-indigo-300"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-indigo-500/15 dark:border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="rounded-full border border-indigo-500/20 bg-white/80 dark:border-white/10 dark:bg-white/5 p-2.5 text-slate-700 dark:text-neutral-300 transition-all hover:bg-indigo-500/20 hover:text-indigo-600 dark:hover:text-indigo-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>

                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md"
                >
                  <FaDownload className="text-[10px]" /> Resume (PDF)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
