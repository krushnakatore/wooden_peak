import clsx from 'clsx';

interface WaveDividerProps {
  /** Background color of the section above the wave (Tailwind bg-* class) */
  topColor: string;
  /** Fill color matching the section below the wave (Tailwind fill-* class) */
  fillColor: string;
  className?: string;
}

export default function WaveDivider({ topColor, fillColor, className }: WaveDividerProps) {
  return (
    <div aria-hidden="true" className={clsx('relative h-14 w-full overflow-hidden sm:h-20', topColor, className)}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={clsx('absolute inset-0 h-full w-[130%] animate-waveDrift sm:w-[120%]', fillColor)}
      >
        <path d="M0,40 C220,90 420,0 720,40 C1020,80 1220,10 1440,40 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
}
