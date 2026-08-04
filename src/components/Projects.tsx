import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaApple,
  FaArrowUpRightFromSquare,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaGooglePlay,
  FaMagnifyingGlassPlus,
  FaXmark,
} from "react-icons/fa6";
import { projects, type Project, type StoreLink } from "../data/portfolio";
import Glass from "./Glass";

type LightboxState = {
  title: string;
  images: string[];
  index: number;
} | null;

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

function ImageLightbox({
  lightbox,
  onClose,
  onNavigate,
}: {
  lightbox: LightboxState;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}) {
  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && lightbox.images.length > 1) {
        onNavigate((lightbox.index - 1 + lightbox.images.length) % lightbox.images.length);
      }
      if (e.key === "ArrowRight" && lightbox.images.length > 1) {
        onNavigate((lightbox.index + 1) % lightbox.images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, onClose, onNavigate]);

  if (!lightbox) return null;

  const activeImg = lightbox.images[lightbox.index];
  const hasMultiple = lightbox.images.length > 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-black/90 p-4 sm:p-6 backdrop-blur-md select-none"
      >
        {/* Header Bar */}
        <div className="z-10 flex items-center justify-between text-white pointer-events-auto">
          <div>
            <h3 className="text-base sm:text-lg font-bold">{lightbox.title}</h3>
            {hasMultiple && (
              <p className="text-xs text-neutral-400">
                Screenshot {lightbox.index + 1} of {lightbox.images.length}
              </p>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close preview"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <FaXmark className="h-5 w-5" />
          </button>
        </div>

        {/* Center Preview Area */}
        <div className="relative flex flex-1 items-center justify-center py-4 cursor-pointer">
          {hasMultiple && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((lightbox.index - 1 + lightbox.images.length) % lightbox.images.length);
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md transition-all hover:bg-indigo-600 hover:border-indigo-400 cursor-pointer"
            >
              <FaChevronLeft className="h-5 w-5" />
            </button>
          )}

          <motion.img
            key={activeImg}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={activeImg}
            alt={`${lightbox.title} screenshot ${lightbox.index + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[75vh] max-w-[90vw] object-contain rounded-lg shadow-2xl cursor-default"
          />

          {hasMultiple && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((lightbox.index + 1) % lightbox.images.length);
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-md transition-all hover:bg-indigo-600 hover:border-indigo-400 cursor-pointer"
            >
              <FaChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Bottom Thumbnail Strip */}
        {hasMultiple && (
          <div
            className="z-10 flex items-center justify-center gap-2 overflow-x-auto py-2"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.images.map((img, i) => (
              <button
                key={i}
                onClick={() => onNavigate(i)}
                className={`relative h-14 w-10 overflow-hidden rounded-md border-2 transition-all ${
                  i === lightbox.index
                    ? "border-indigo-500 scale-105 shadow-lg shadow-indigo-500/30"
                    : "border-white/20 opacity-50 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} className="h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({
  project,
  index,
  onOpenLightbox,
}: {
  project: Project;
  index: number;
  onOpenLightbox: (images: string[], startIdx: number, title: string) => void;
}) {
  const [imgError, setImgError] = useState(false);

  const hasMultipleImages = Boolean(project.images && project.images.length > 0);
  const hasSingleImage = Boolean(project.image && !imgError);

  const handleBannerClick = (startIndex: number = 0) => {
    if (hasMultipleImages) {
      onOpenLightbox(project.images!, startIndex, project.title);
    } else if (hasSingleImage) {
      onOpenLightbox([project.image!], 0, project.title);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group block h-full"
    >
      <Glass className="flex h-full flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        {/* App Hero Image Screenshots OR Gradient Placeholder */}
        {hasMultipleImages ? (
          /* Flat Single-Line Multi-Screenshot Banner */
          <div
            onClick={() => handleBannerClick(0)}
            className="relative h-48 sm:h-56 w-full cursor-pointer overflow-hidden border-b border-indigo-500/15 dark:border-white/10 bg-slate-950"
          >
            {/* Top Bar Badges */}
            <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
              <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md shadow-md">
                <span className="text-xs">{project.iconSymbol}</span>
                <span className="truncate max-w-[120px]">{project.title}</span>
              </span>
              <span className="rounded-full border border-indigo-400/30 bg-indigo-600/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-md">
                {project.role}
              </span>
            </div>

            {/* Single line flat screenshots */}
            <div className="flex h-full w-full flex-row">
              {project.images!.map((imgUrl, i) => (
                <div
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBannerClick(i);
                  }}
                  className="group/img relative h-full flex-1 overflow-hidden border-r border-slate-800/60 last:border-r-0"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} Screenshot ${i + 1}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-indigo-950/0 transition-colors group-hover/img:bg-indigo-950/20 flex items-center justify-center">
                    <FaMagnifyingGlassPlus className="text-white text-lg opacity-0 transition-opacity group-hover/img:opacity-100 drop-shadow-md" />
                  </div>
                </div>
              ))}
            </div>

            {/* Click to expand hint overlay */}
            <div className="absolute bottom-2 right-2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-950/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-md border border-white/10">
                <FaMagnifyingGlassPlus className="text-[9px]" /> Click to preview
              </span>
            </div>

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
          </div>
        ) : hasSingleImage ? (
          /* Single Hero Screenshot Banner */
          <div
            onClick={() => handleBannerClick(0)}
            className="relative h-48 sm:h-52 w-full cursor-pointer overflow-hidden border-b border-indigo-500/15 dark:border-white/10 bg-slate-900/40"
          >
            <img
              src={project.image}
              alt={`${project.title} App Screenshot`}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80" />

            {/* Top Bar Badges over Hero Image */}
            <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
              <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/75 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md shadow-md">
                <span className="text-xs">{project.iconSymbol}</span>
                <span className="truncate max-w-[120px]">{project.title}</span>
              </span>
              <span className="rounded-full border border-indigo-400/30 bg-indigo-600/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-md shadow-md">
                {project.role}
              </span>
            </div>

            {/* Click to expand hint overlay */}
            <div className="absolute bottom-2 right-2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-950/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-md border border-white/10">
                <FaMagnifyingGlassPlus className="text-[9px]" /> Click to preview
              </span>
            </div>
          </div>
        ) : (
          /* Stylish Placeholder Banner when hero image is missing or loading fails */
          <div
            className={`relative flex h-48 sm:h-52 w-full flex-col justify-between bg-gradient-to-br ${project.gradient} p-5 border-b border-indigo-500/15 dark:border-white/10 overflow-hidden`}
          >
            {/* Decorative Background Pattern */}
            <div className="absolute -right-6 -bottom-6 text-7xl opacity-10 select-none font-bold text-white pointer-events-none">
              {project.iconSymbol}
            </div>

            {/* Top Bar Badges */}
            <div className="flex items-center justify-between z-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/20 dark:bg-slate-900/50 text-2xl shadow-lg backdrop-blur-md">
                {project.iconSymbol}
              </div>
              <span className="rounded-full border border-indigo-500/20 bg-white/90 dark:border-white/15 dark:bg-slate-900/80 px-3 py-1 text-xs font-bold text-indigo-900 dark:text-neutral-200 backdrop-blur-md shadow-md">
                {project.role}
              </span>
            </div>

            {/* Bottom Info inside Placeholder */}
            <div className="z-10 mt-auto pt-4">
              <h4 className="text-lg font-bold text-white drop-shadow-sm">{project.title}</h4>
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors flex items-center justify-between">
            {project.title}
            <FaArrowUpRightFromSquare className="h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </h3>

          <p className="mt-1 text-xs font-semibold text-indigo-600 dark:text-cyan-300">
            {project.subtitle}
          </p>

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
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 6;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenCount = projects.length - INITIAL_COUNT;

  const handleOpenLightbox = (images: string[], startIdx: number, title: string) => {
    setLightbox({
      title,
      images,
      index: startIdx,
    });
  };

  const handleCloseLightbox = () => {
    setLightbox(null);
  };

  const handleNavigateLightbox = (newIndex: number) => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index: newIndex,
    });
  };

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
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onOpenLightbox={handleOpenLightbox}
          />
        ))}
      </div>

      {/* View More / Show Less Toggle Button */}
      {projects.length > INITIAL_COUNT && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="group inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-6 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-300 backdrop-blur-md transition-all hover:border-indigo-500 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500/30 dark:hover:text-white hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95 cursor-pointer"
          >
            <span>
              {showAll
                ? "Show Fewer Projects"
                : `View More Projects (${hiddenCount} More)`}
            </span>
            {showAll ? (
              <FaChevronUp className="text-xs transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <FaChevronDown className="text-xs transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </motion.div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <ImageLightbox
        lightbox={lightbox}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </section>
  );
}
