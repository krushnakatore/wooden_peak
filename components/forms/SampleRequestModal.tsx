'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { X, CheckCircle2, Loader2, PackageCheck } from 'lucide-react';
import { sampleRequestSchema, SampleRequestFormValues } from '@/lib/schemas';
import { TextField, TextAreaField } from '@/components/forms/FormFields';
import Button from '@/components/ui/Button';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productSku: string;
}

export default function SampleRequestModal({ isOpen, onClose, productName, productSku }: SampleRequestModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SampleRequestFormValues>({ resolver: zodResolver(sampleRequestSchema) });

  async function onSubmit(values: SampleRequestFormValues) {
    if (values.website) return; // honeypot triggered — silently drop
    setStatus('submitting');
    // [Integration point] POST to your API route / CRM, e.g.:
    // await fetch('/api/sample-request', { method: 'POST', body: JSON.stringify({ ...values, productName, productSku }) });
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus('success');
    reset();
  }

  function handleClose() {
    onClose();
    setTimeout(() => setStatus('idle'), 300);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[80] bg-ocean-dark/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4" onClick={handleClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl2 bg-white p-6 shadow-lift sm:p-8"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wood/10 text-wood">
                    <PackageCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ink">Request a Sample</h3>
                    <p className="text-xs text-ink-muted">
                      {productName} · SKU {productSku}
                    </p>
                  </div>
                </div>
                <button onClick={handleClose} aria-label="Close" className="rounded-full p-1.5 text-ink-muted hover:bg-ocean/5">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {status === 'success' ? (
                <div className="flex flex-col items-center gap-3 py-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-seagreen" strokeWidth={1.5} />
                  <h4 className="font-serif text-lg text-ink">Sample request received</h4>
                  <p className="max-w-sm text-sm text-ink-light">
                    Our team will confirm sample availability, cost, and shipping timeline
                    (typically 7–10 working days) by email within 1–2 business days.
                  </p>
                  <Button variant="outline" size="sm" onClick={handleClose} type="button">
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField label="Full Name" required error={errors.fullName?.message} {...register('fullName')} />
                    <TextField label="Company Name" required error={errors.companyName?.message} {...register('companyName')} />
                    <TextField label="Business Email" type="email" required error={errors.email?.message} {...register('email')} />
                    <TextField label="Phone / WhatsApp" required error={errors.phone?.message} {...register('phone')} />
                  </div>
                  <TextField label="Country" required error={errors.country?.message} {...register('country')} />
                  <TextAreaField
                    label="Full Shipping Address"
                    required
                    rows={3}
                    placeholder="Address for sample courier dispatch"
                    error={errors.shippingAddress?.message}
                    {...register('shippingAddress')}
                  />
                  <TextAreaField
                    label="Notes (optional)"
                    rows={2}
                    placeholder="Any specific finish, size, or customisation you'd like on the sample."
                    error={errors.message?.message}
                    {...register('message')}
                  />
                  <p className="text-xs text-ink-muted">
                    Note: Sample costs and courier charges are confirmed by our team before dispatch.
                    See our{' '}
                    <a href="/shipping-sample-policy" className="underline">
                      Shipping &amp; Sample Policy
                    </a>
                    .
                  </p>
                  <Button type="submit" variant="secondary" className="w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Submitting
                      </>
                    ) : (
                      'Submit Sample Request'
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
