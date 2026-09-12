import { Factory, Boxes, ShieldCheck, Anchor, FileSignature, Clock3, Globe2, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { AnimatedStagger, StaggerItem } from '@/components/ui/AnimatedSection';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { siteConfig } from '@/lib/site-config';
import Button from '@/components/ui/Button';

const bigStats = [
  {
    icon: Factory,
    value: 10000,
    suffix: '+',
    label: 'Monthly Production Capacity (pieces)',
    accent: 'bg-ocean/10 text-ocean-dark',
  },
  {
    icon: Anchor,
    value: 0,
    suffix: '',
    label: 'Nhava Sheva Port Dispatch',
    accent: 'bg-seagreen/10 text-seagreen',
    display: siteConfig.export.port.split(',')[0],
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: '%',
    label: 'Export-Grade Finishing & QC',
    accent: 'bg-wood/10 text-wood',
  },
];

const metrics = [
  { icon: Boxes, label: 'Standard MOQ', value: siteConfig.export.standardMOQShort },
  { icon: FileSignature, label: 'Shipping Terms', value: siteConfig.export.incoterms.join(' / ') },
  { icon: Clock3, label: 'Bulk Order Lead Time', value: siteConfig.export.bulkLeadTime },
  { icon: Globe2, label: 'Primary Export Markets', value: siteConfig.export.primaryMarkets.join(', ') },
];

export default function ExportMetrics() {
  return (
    <section className="bg-white/60 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Export Capabilities"
          title="Built for Container-Scale, Repeat Wholesale Orders"
          description="Straightforward, fact-based numbers so you can plan your sourcing with confidence."
        />

        <AnimatedStagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {bigStats.map(({ icon: Icon, value, suffix, label, accent, display }) => (
            <StaggerItem key={label}>
              <div className="flex h-full flex-col items-center gap-3 rounded-xl2 border border-ocean/10 bg-background p-8 text-center shadow-soft transition-shadow hover:shadow-card">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${accent}`}>
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                {display ? (
                  <p className="font-serif text-3xl font-semibold text-ink sm:text-4xl">{display}</p>
                ) : (
                  <AnimatedCounter
                    value={value}
                    suffix={suffix}
                    className="font-serif text-4xl font-semibold text-ink sm:text-5xl"
                  />
                )}
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{label}</p>
              </div>
            </StaggerItem>
          ))}
        </AnimatedStagger>

        <AnimatedStagger className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ icon: Icon, label, value }) => (
            <StaggerItem key={label}>
              <div className="flex h-full gap-4 rounded-xl2 border border-ocean/10 bg-background p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean-dark">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{label}</p>
                  <p className="mt-1 text-base font-medium leading-snug text-ink">{value}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </AnimatedStagger>

        <div className="mt-10 flex justify-center">
          <Button
            href="/export-capabilities"
            variant="outline"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            View Full Export Capabilities
          </Button>
        </div>
      </div>
    </section>
  );
}
