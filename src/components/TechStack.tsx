import { motion } from "framer-motion";
import {
  FaBell,
  FaBolt,
  FaBoxesPacking,
  FaBug,
  FaChartLine,
  FaCloudArrowUp,
  FaCreditCard,
  FaCubes,
  FaDesktop,
  FaFeatherPointed,
  FaLanguage,
  FaLaptopCode,
  FaLayerGroup,
  FaListCheck,
  FaNetworkWired,
  FaPhoneVolume,
  FaReceipt,
  FaShapes,
  FaShieldHalved,
  FaSliders,
  FaVial,
  FaWallet,
} from "react-icons/fa6";
import { technicalSkills, type SkillItem } from "../data/portfolio";
import Glass from "./Glass";

function SkillIcon({ skill }: { skill: SkillItem }) {
  if (skill.iconSrc) {
    return <img src={skill.iconSrc} alt={skill.name} className="h-5 w-5 object-contain shrink-0" />;
  }

  // Custom dedicated icon rendering based on skill.iconKey
  switch (skill.iconKey) {
    case "responsive":
      return <FaDesktop className="h-5 w-5 text-cyan-600 dark:text-cyan-400 shrink-0" />;
    case "i18n":
      return <FaLanguage className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0" />;
    case "architecture":
      return <FaLayerGroup className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0" />;
    case "bloc":
      return <FaCubes className="h-5 w-5 text-cyan-600 dark:text-cyan-400 shrink-0" />;
    case "mvvm":
      return <FaLaptopCode className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />;
    case "solid":
      return <FaShapes className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" />;
    case "shorebird":
      return <FaFeatherPointed className="h-5 w-5 text-cyan-600 dark:text-cyan-300 shrink-0" />;
    case "flavors":
      return <FaSliders className="h-5 w-5 text-indigo-600 dark:text-indigo-300 shrink-0" />;
    case "publishing":
      return <FaCloudArrowUp className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0" />;
    case "socket":
      return <FaNetworkWired className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />;
    case "stripe":
      return <FaCreditCard className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0" />;
    case "razorpay":
      return <FaCreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />;
    case "paytm":
      return <FaWallet className="h-5 w-5 text-cyan-600 dark:text-cyan-400 shrink-0" />;
    case "revenuecat":
      return <FaReceipt className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />;
    case "voip":
      return <FaPhoneVolume className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0" />;
    case "onesignal":
      return <FaBell className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0" />;
    case "flutterflow":
      return <FaBolt className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" />;
    case "mason":
      return <FaBoxesPacking className="h-5 w-5 text-amber-600 dark:text-amber-500 shrink-0" />;
    case "devtools":
      return <FaBug className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />;
    case "testing":
      return <FaVial className="h-5 w-5 text-cyan-600 dark:text-cyan-400 shrink-0" />;
    case "sonarqube":
      return <FaShieldHalved className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />;
    case "jira":
      return <FaListCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0" />;
    default:
      return <FaChartLine className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0" />;
  }
}

export default function TechStack() {
  return (
    <section id="skills" className="section-shell scroll-mt-28 sm:scroll-mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title gradient-heading"
      >
        Technical Skills & Tools
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technicalSkills.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <Glass className="h-full p-6">
              <h3 className="mb-4 text-base font-bold text-slate-900 dark:text-white border-b border-indigo-500/15 dark:border-white/10 pb-3 flex items-center gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 text-lg">⚡</span> {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 rounded-xl border border-indigo-500/15 bg-indigo-500/5 dark:border-white/10 dark:bg-white/5 px-3 py-2 transition-all hover:scale-[1.03] hover:border-indigo-500/40 hover:bg-indigo-500/15 dark:hover:border-indigo-400/40 dark:hover:bg-indigo-500/10"
                  >
                    <SkillIcon skill={skill} />
                    <span className="text-xs font-semibold text-slate-800 dark:text-neutral-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Glass>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
