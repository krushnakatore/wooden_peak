import { MousePointerClick, FileText, PackageSearch, Ship } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { AnimatedStagger, StaggerItem } from '@/components/ui/AnimatedSection';

const steps = [
  {
    icon: MousePointerClick,
    step: '01',
    title: 'Select Your Products',
    description: 'Browse our catalogue or Enquiry Basket products across all six categories, or brief us for a custom collection.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Request a Quote',
    description: 'Submit your enquiry with target quantities and markets. Our export team responds with pricing and terms within 1–2 business days.',
  },
  {
    icon: PackageSearch,
    step: '03',
    title: 'Approve a Sample',
    description: 'We produce and ship a physical sample for your sign-off on quality, finish, and packaging before bulk production begins.',
  },
  {
    icon: Ship,
    step: '04',
    title: 'Production & Dispatch',
    description: 'Once approved, we schedule production and manage export documentation, packaging, and dispatch to your chosen port or address.',
  },
];

export default function OrderProcess() {
  return (
    <section className="bg-sand-50/60 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple, Transparent B2B Order Process"
          description="No guesswork. Every order follows the same four clear steps, from first enquiry to dispatch."
        />

        <AnimatedStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, step, title, description }, index) => (
            <StaggerItem key={step} className="relative">
              <div className="relative h-full rounded-xl2 border border-ocean/10 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-teal">
                <span className="font-serif text-4xl text-ocean/10">{step}</span>
                <div className="mt-2 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-seagreen/10 text-seagreen">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-ocean/15 lg:block" />
              )}
            </StaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
