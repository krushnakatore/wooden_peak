'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { CheckCircle2, Download, Loader2 } from 'lucide-react';
import { catalogueRequestSchema, CatalogueRequestFormValues, businessTypes } from '@/lib/schemas';
import { TextField, SelectField } from '@/components/forms/FormFields';
import Button from '@/components/ui/Button';

export default function CatalogueRequestForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CatalogueRequestFormValues>({ resolver: zodResolver(catalogueRequestSchema) });

  async function onSubmit(values: CatalogueRequestFormValues) {
    if (values.website) return; // honeypot triggered — silently drop
    setStatus('submitting');
    // [Integration point] POST to your API route / email service, then email the PDF catalogue, e.g.:
    // await fetch('/api/catalogue-request', { method: 'POST', body: JSON.stringify(values) });
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus('success');
    reset();
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl2 border border-seagreen/30 bg-seagreen/5 px-6 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-seagreen" strokeWidth={1.5} />
        <h3 className="font-serif text-2xl text-ink">Catalogue on its way</h3>
        <p className="max-w-md text-sm text-ink-light">
          Thank you for your interest. Our team will verify your request and email the full wholesale
          catalogue to your business email within 1 business day.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus('idle')} type="button">
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Full Name" required placeholder="Jane Cooper" error={errors.fullName?.message} {...register('fullName')} />
        <TextField label="Company Name" required placeholder="Cooper Trading Co." error={errors.companyName?.message} {...register('companyName')} />
        <TextField label="Business Email" type="email" required placeholder="jane@cooperco.com" error={errors.email?.message} {...register('email')} />
        <TextField label="Phone / WhatsApp" required placeholder="+230 5XXX XXXX" error={errors.phone?.message} {...register('phone')} />
        <TextField label="Country" required placeholder="Mauritius" error={errors.country?.message} {...register('country')} />
        <SelectField label="Business Type" required options={businessTypes} error={errors.businessType?.message} {...register('businessType')} />
      </div>
      <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={status === 'submitting'} icon={status === 'submitting' ? <Loader2 className="h-5 w-5 animate-spin" /> : <Download className="h-5 w-5" />}>
        {status === 'submitting' ? 'Submitting' : 'Send Me the Catalogue'}
      </Button>
      <p className="text-xs text-ink-muted">
        We only send the catalogue to verified business contacts. See our{' '}
        <a href="/privacy-policy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
