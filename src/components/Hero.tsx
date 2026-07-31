import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa6";
import { profile } from "../data/portfolio";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % profile.roles.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-20 sm:pt-24 scroll-mt-24" aria-label="Introduction">
      <div className="section-shell flex min-h-[calc(100vh-7rem)] flex-col items-center gap-12 lg:flex-row lg:items-center">
        <div className="flex w-full flex-col items-center text-center lg:w-3/5 lg:items-start lg:text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </span>
            Available for Senior & Lead Mobile Roles
          </motion.div>

          {/* Heading with extra bottom padding to prevent 'j' and 'y' descender clipping */}
          <motion.h1
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pb-3 pt-1 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-700 dark:from-white dark:via-slate-200 dark:to-indigo-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent leading-[1.2] sm:text-6xl sm:leading-[1.2] lg:text-7xl lg:leading-[1.18]"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ filter: "blur(8px)", opacity: 0, y: 12 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-2xl font-medium tracking-tight text-slate-800 dark:text-neutral-200 lg:text-3xl pb-2"
            aria-live="polite"
          >
            <span className="gradient-text">{profile.roles[roleIndex]}</span>
          </motion.div>

          <motion.p
            initial={{ filter: "blur(6px)", opacity: 0, y: 16 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="my-6 max-w-2xl text-base font-normal leading-relaxed text-slate-700 dark:text-neutral-300 sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-indigo-500/15 bg-white/70 dark:border-white/5 dark:bg-white/[0.03] px-3.5 py-2.5 text-center backdrop-blur-sm lg:text-left"
              >
                <div className="text-xl font-bold text-indigo-600 dark:text-indigo-300 sm:text-2xl">{stat.value}</div>
                <div className="text-xs text-slate-600 dark:text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40"
            >
              <FaDownload aria-hidden="true" />
              Download Resume (PDF)
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-white/80 dark:border-white/15 dark:bg-white/5 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-neutral-200 backdrop-blur-md transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-300"
            >
              <FaEnvelope aria-hidden="true" />
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Executive Portrait Frame Container */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, scale: 0.95 }}
          animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-full lg:w-2/5 lg:p-4"
        >
          <div className="relative mx-auto flex max-w-sm flex-col items-center justify-center rounded-3xl border border-indigo-500/30 bg-white/80 dark:bg-gradient-to-b dark:from-indigo-950/40 dark:via-obsidian-900/60 dark:to-obsidian-950/80 p-8 shadow-2xl backdrop-blur-xl">
            {/* Ambient Background Glow Orbs */}
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl dark:bg-indigo-500/25" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl dark:bg-cyan-500/25" />
            
            <div className="relative z-10 flex flex-col items-center text-center w-full">
              {/* Executive Squircle Portrait Frame */}
              <div className="group relative mb-5 flex h-72 w-60 items-center justify-center rounded-[2.5rem] p-1 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] border-2 border-white/40 dark:border-white/20 bg-slate-100 dark:bg-slate-950 shadow-inner">
                  <img
                    src={profile.photo}
                    alt={`${profile.name} Profile`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{profile.name}</h3>
              <p className="mt-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300">Senior Mobile App Developer</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-neutral-400">
                10+ Years Mobile Engineering • 5+ Years Flutter • 5 Years Native Android
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
