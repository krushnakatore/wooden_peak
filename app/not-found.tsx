import { Compass } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Compass className="mb-6 h-14 w-14 text-wood" strokeWidth={1.25} />
      <h1 className="font-serif text-3xl text-ink sm:text-4xl">Page Not Found</h1>
      <p className="mt-3 max-w-md text-ink-light">
        The page you&apos;re looking for may have moved. Browse our product range or get in touch with
        our export team directly.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/products" variant="outline">
          Browse Products
        </Button>
        <Button href="/contact" variant="primary">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
