import { useId, type ReactNode } from "react";

type GlassProps = {
  children: ReactNode;
  className?: string;
  frost?: number;
  saturation?: number;
};

export default function Glass({
  children,
  className = "",
  frost = 16,
  saturation = 140,
}: GlassProps) {
  const id = useId().replace(/:/g, "-");
  const filterId = `glass-filter-${id}`;

  return (
    <div
      className={`glass-surface rounded-2xl ${className}`}
      style={
        {
          "--glass-frost": `${frost}px`,
          "--glass-saturation": `${saturation}%`,
        } as React.CSSProperties
      }
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 overflow-hidden"
      >
        <defs>
          <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.008"
              numOctaves="2"
              seed="92"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
