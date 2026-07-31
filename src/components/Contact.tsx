import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaPhone } from "react-icons/fa6";
import { profile } from "../data/portfolio";
import Glass from "./Glass";

export default function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-28 sm:scroll-mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title gradient-heading"
      >
        Let's Connect
      </motion.h2>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-base font-normal leading-relaxed text-slate-700 dark:text-neutral-300 sm:text-lg">
            I am available for Senior & Lead Mobile Engineer opportunities, Flutter consultancy, white-label architecture contracts, and engineering advisory roles.
          </p>

          <div className="space-y-4 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-indigo-500/15 bg-white/80 dark:border-white/10 dark:bg-white/5 p-4 transition-all hover:border-indigo-500 hover:bg-indigo-50 dark:hover:border-indigo-400/50 dark:hover:bg-indigo-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-neutral-400">Direct Email</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {profile.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="group flex items-center gap-4 rounded-2xl border border-indigo-500/15 bg-white/80 dark:border-white/10 dark:bg-white/5 p-4 transition-all hover:border-indigo-500 hover:bg-indigo-50 dark:hover:border-indigo-400/50 dark:hover:bg-indigo-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-neutral-400">Phone & WhatsApp</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {profile.phone}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-indigo-500/15 bg-white/80 dark:border-white/10 dark:bg-white/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/20 text-cyan-600 dark:text-cyan-400">
                <FaLocationDot className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-neutral-400">Location</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{profile.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Glass className="h-full p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Online Profiles</h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-neutral-400 mb-6">
                Connect with me on LinkedIn or review my public mobile repositories and open-source contributions on GitHub.
              </p>

              <div className="space-y-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-3 text-xs font-semibold text-indigo-700 dark:text-indigo-300 transition-all hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <FaLinkedin className="text-base" /> LinkedIn Profile
                  </span>
                  <span>↗</span>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-indigo-500/20 bg-white/80 dark:border-white/10 dark:bg-white/5 px-4 py-3 text-xs font-semibold text-slate-800 dark:text-neutral-200 transition-all hover:bg-indigo-50 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-300"
                >
                  <span className="flex items-center gap-2">
                    <FaGithub className="text-base" /> GitHub Repositories
                  </span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-indigo-500/15 dark:border-white/10">
              <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                🟢 Available for immediate joining
              </span>
            </div>
          </Glass>
        </motion.div>
      </div>
    </section>
  );
}
