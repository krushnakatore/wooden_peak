import { ReactNode } from 'react';
import { FileWarning } from 'lucide-react';

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <article className="container max-w-3xl py-16 sm:py-20">
      <h1 className="font-serif text-3xl text-ink sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-ink-muted">Last updated: {lastUpdated}</p>

      <div className="mt-6 flex items-start gap-3 rounded-lg border border-wood/30 bg-wood/5 px-4 py-3 text-sm text-ink">
        <FileWarning className="mt-0.5 h-5 w-5 shrink-0" />
        <span>
          This page is a draft policy template provided for structural and launch-planning purposes.
          Have it reviewed by a qualified legal professional in your operating jurisdiction before
          publishing it as your final policy.
        </span>
      </div>

      <div className="prose prose-slate mt-10 max-w-none prose-headings:font-serif prose-headings:text-ink prose-a:text-seagreen">
        {children}
      </div>
    </article>
  );
}
