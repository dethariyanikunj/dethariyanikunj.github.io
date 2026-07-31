import { motion } from "framer-motion";
import { FaApple, FaArrowUpRightFromSquare, FaGooglePlay } from "react-icons/fa6";
import { projects, type Project, type StoreLink } from "../data/portfolio";
import Glass from "./Glass";

function StoreButtons({ storeLinks }: { storeLinks: StoreLink[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {storeLinks.map((store) => {
        const isAppStore = store.platform === "ios";

        return (
          <a
            key={`${store.url}-${store.label ?? store.platform}`}
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300 transition-all hover:border-indigo-500 hover:bg-indigo-600 hover:text-white dark:hover:border-indigo-400 dark:hover:bg-indigo-500/25 dark:hover:text-white"
          >
            {isAppStore ? (
              <FaApple className="text-xs" aria-hidden="true" />
            ) : (
              <FaGooglePlay className="text-xs" aria-hidden="true" />
            )}
            {store.label ?? (isAppStore ? "App Store" : "Google Play")}
          </a>
        );
      })}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group block h-full"
    >
      <Glass className="flex h-full flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        
        {/* App Screenshot Preview OR Gradient Banner Placeholder */}
        {project.image ? (
          <div className="relative h-48 w-full overflow-hidden border-b border-indigo-500/15 dark:border-white/10 bg-slate-100 dark:bg-slate-950">
            <img
              src={project.image}
              alt={`${project.title} App Screenshot`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 dark:from-obsidian-950 dark:opacity-60" />
            <div className="absolute top-4 right-4 z-10">
              <span className="rounded-full border border-indigo-500/20 bg-white/90 dark:border-white/20 dark:bg-obsidian-950/80 px-3 py-1 text-xs font-bold text-indigo-900 dark:text-neutral-200 backdrop-blur-md shadow-md">
                {project.role}
              </span>
            </div>
          </div>
        ) : (
          <div className={`relative flex h-36 w-full items-center justify-between bg-gradient-to-br ${project.gradient} p-6 border-b border-indigo-500/15 dark:border-white/10`}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 dark:border-white/20 bg-white/80 dark:bg-obsidian-950/60 text-3xl shadow-xl backdrop-blur-md">
              {project.iconSymbol}
            </div>
            <span className="rounded-full border border-indigo-500/20 bg-white/90 dark:border-white/15 dark:bg-obsidian-950/70 px-3 py-1 text-xs font-bold text-indigo-900 dark:text-neutral-200 backdrop-blur-md shadow-md">
              {project.role}
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors flex items-center justify-between">
            {project.title}
            <FaArrowUpRightFromSquare className="h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </h3>
          
          <p className="mt-1 text-xs font-semibold text-indigo-600 dark:text-cyan-300">{project.subtitle}</p>
          
          <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-600 dark:text-neutral-300">
            {project.description}
          </p>

          {/* Stack Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-indigo-500/15 bg-indigo-500/5 dark:border-white/10 dark:bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Store buttons */}
          {project.storeLinks && <StoreButtons storeLinks={project.storeLinks} />}
        </div>
      </Glass>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-28 sm:scroll-mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title gradient-heading"
      >
        Featured Projects & Apps
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
