import { motion } from "framer-motion";
import { FaAward, FaBriefcase, FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { awards, education, experience } from "../data/portfolio";
import Glass from "./Glass";

export default function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-28 sm:scroll-mt-32">
      {/* Experience Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-3.5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:border-white/15 dark:bg-white/5 dark:text-indigo-400 shadow-sm">
          <FaBriefcase className="text-xl sm:text-2xl" />
        </span>
        <span className="gradient-heading">Professional Experience</span>
      </motion.h2>

      <div className="space-y-6">
        {experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Glass className="p-6 lg:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300">
                    {item.period}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                    {item.company}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-700 dark:text-neutral-300">
                    <span className="font-semibold text-purple-700 dark:text-purple-300">{item.role}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-neutral-400">
                      <FaLocationDot className="text-indigo-600 dark:text-indigo-400" /> {item.location}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-slate-700 dark:text-neutral-300 sm:text-sm">
                {item.lines.map((line, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Glass>
          </motion.div>
        ))}
      </div>

      {/* Awards Section */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 mt-14 flex items-center gap-3.5 text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-white"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 shadow-sm">
          <FaAward className="text-lg" />
        </span>
        <span>Awards & Recognition</span>
      </motion.h3>

      <div className="grid gap-5 lg:grid-cols-2">
        {awards.map((award, index) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Glass className="h-full border-amber-500/30 dark:border-amber-500/20 p-6 hover:border-amber-500/50 dark:hover:border-amber-400/40">
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                  {award.year}
                </span>
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{award.title}</h4>
              <p className="text-xs font-semibold text-amber-800 dark:text-amber-200">{award.issuer}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-neutral-400">{award.description}</p>
            </Glass>
          </motion.div>
        ))}
      </div>

      {/* Education Section */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 mt-14 flex items-center gap-3.5 text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-white"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shadow-sm">
          <FaGraduationCap className="text-lg" />
        </span>
        <span>Education</span>
      </motion.h3>

      <div className="grid gap-5">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Glass className="p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.degree}</h4>
                  <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">{item.school}</p>
                </div>
                <span className="text-xs text-slate-500 dark:text-neutral-400">{item.period}</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-neutral-400">{item.description}</p>
            </Glass>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
