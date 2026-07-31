import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/15 dark:border-white/10 bg-white/80 dark:bg-[#080911]/90 px-6 py-8 text-center backdrop-blur-xl transition-colors duration-300">
      <p className="text-xs text-slate-500 dark:text-neutral-400">
        © {new Date().getFullYear()} {profile.name}. All rights reserved. Senior Mobile Engineer.
      </p>
    </footer>
  );
}
