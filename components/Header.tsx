'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ClipboardList, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { siteConfig } from '@/lib/site-config';
import { useEnquiry } from '@/context/EnquiryContext';
import Button from '@/components/ui/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { itemCount, openDrawer } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full border-b border-ocean/10 bg-white/75 backdrop-blur-md transition-shadow duration-300',
        isScrolled && 'shadow-soft'
      )}
    >
      <div className="bg-gradient-to-r from-ocean-dark to-seagreen-dark py-2 text-center text-xs font-medium text-white">
        <div className="container flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <span>Manufacturer &amp; Exporter of Wooden Handicrafts — India</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">MOQ from {siteConfig.export.standardMOQShort}</span>
        </div>
      </div>

      <div className="container flex h-20 items-center justify-between gap-2 xl:gap-4">
        <Link href="/" className="flex shrink-0 flex-col leading-none">
          <span className="font-serif text-xl font-semibold text-ocean-dark xl:text-2xl sm:text-[28px]">
            MeaningWood
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-wood">
            Crafts
          </span>
        </Link>

        <nav className="hidden items-center xl:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'whitespace-nowrap rounded-full px-1.5 py-2 text-[12.5px] font-medium transition-colors',
                pathname === item.href
                  ? 'bg-ocean/5 text-ocean-dark'
                  : 'text-ink-light hover:bg-ocean/5 hover:text-ocean-dark'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <button
            onClick={openDrawer}
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ocean/15 text-ocean-dark transition-colors hover:bg-ocean/5"
            aria-label="Open enquiry basket"
          >
            <ClipboardList className="h-[18px] w-[18px]" strokeWidth={1.75} />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-seagreen text-[11px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </button>
          <Button href="/catalogue" variant="outline" size="xs" className="whitespace-nowrap">
            Request Catalogue
          </Button>
          <Button href="/contact" variant="primary" size="xs" className="whitespace-nowrap">
            Get Wholesale Quote
          </Button>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <button
            onClick={openDrawer}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ocean/15 text-ocean-dark"
            aria-label="Open enquiry basket"
          >
            <ClipboardList className="h-5 w-5" strokeWidth={1.75} />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-seagreen text-[10px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ocean/15 text-ocean-dark"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-ocean/10 bg-white/90 px-4 pb-6 pt-2 backdrop-blur-md xl:hidden">
          <nav className="flex flex-col">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'flex items-center justify-between border-b border-ocean/5 py-3.5 text-sm font-medium',
                  pathname === item.href ? 'text-ocean-dark' : 'text-ink-light'
                )}
              >
                {item.label}
                <ChevronDown className="h-4 w-4 -rotate-90 opacity-40" />
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Button href="/catalogue" variant="outline" className="w-full">
              Request Catalogue
            </Button>
            <Button href="/contact" variant="primary" className="w-full">
              Get Wholesale Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
