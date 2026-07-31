import { motion } from "framer-motion";
import { FaAndroid, FaGears, FaLayerGroup, FaLocationDot, FaMobileScreen } from "react-icons/fa6";
import { profile } from "../data/portfolio";
import Glass from "./Glass";

const serviceIcons = [
  <FaMobileScreen className="text-xl text-indigo-600 dark:text-indigo-300" key="mobile" />,
  <FaAndroid className="text-2xl text-emerald-600 dark:text-emerald-400" key="android" />,
  <FaLayerGroup className="text-xl text-purple-600 dark:text-purple-300" key="layer" />,
  <FaGears className="text-xl text-cyan-600 dark:text-cyan-300" key="devops" />,
];

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-28 sm:scroll-mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title gradient-heading"
      >
        About & Expertise
      </motion.h2>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          {profile.about.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-slate-700 dark:text-neutral-300">
              {paragraph}
            </p>
          ))}

          <div className="pt-2">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-600 dark:text-indigo-400">
                <FaLocationDot />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Based in {profile.location}</h4>
                <p className="text-xs text-slate-600 dark:text-neutral-400">Open to Remote Opportunities & Global Tech Collaborations</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {profile.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            >
              <Glass className="h-full p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/15 bg-indigo-500/5 dark:border-white/10 dark:bg-white/5 shadow-inner">
                  {serviceIcons[index] ?? <FaMobileScreen />}
                </div>
                <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-neutral-400">{service.description}</p>
              </Glass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
