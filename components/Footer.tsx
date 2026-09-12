'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    // [Wire to email marketing provider — e.g. Mailchimp, Brevo, HubSpot]
    setSubmitted(true);
  }

  return (
    <footer className="border-t border-ocean/10 bg-white/60 text-ink">
      <div className="container grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-semibold text-ink">MeaningWood</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-wood">Crafts</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink">
            {siteConfig.description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-seagreen/25 bg-seagreen/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-seagreen-dark">
            <ShieldCheck className="h-4 w-4 text-seagreen" />
            Made in India — Crafted for the World
          </div>

          <div className="mt-6 flex items-center gap-3">
            {[
              { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
              { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
              { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
              { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ocean/15 text-ink transition-colors hover:border-ocean hover:text-ocean-dark"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink">Company</h3>
          <ul className="space-y-3 text-sm">
            {siteConfig.footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink transition-colors hover:text-ocean-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink">Product Categories</h3>
          <ul className="space-y-3 text-sm">
            {siteConfig.footerLinks.products.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink transition-colors hover:text-ocean-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-ink">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-seagreen" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}, {siteConfig.address.country}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-seagreen" />
              <a href={`mailto:${siteConfig.email.sales}`} className="hover:text-ocean-dark">
                {siteConfig.email.sales}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-seagreen" />
              <a href={`tel:${siteConfig.phone.e164}`} className="hover:text-ocean-dark">
                {siteConfig.phone.display}
              </a>
            </li>
          </ul>

          <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-ink">
            Buyer Newsletter
          </h3>
          {submitted ? (
            <p className="flex items-center gap-2 text-sm text-seagreen-dark">
              <CheckCircle2 className="h-4 w-4" /> Thank you — you&apos;re subscribed.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your business email"
                className="w-full rounded-full border border-ocean/15 bg-background px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-ocean focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-seagreen px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-seagreen-dark"
              >
                Join
              </button>
            </form>
          )}
          <p className="mt-2 text-xs text-ink-muted">
            New product drops and export market insights. No spam.
          </p>
        </div>
      </div>

      <div className="border-t border-ocean/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {siteConfig.footerLinks.compliance.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-ocean-dark">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
