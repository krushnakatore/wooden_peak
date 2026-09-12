'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import {
  buyerEnquirySchema,
  BuyerEnquiryFormValues,
  businessTypes,
  quantityRanges,
  incoterms,
} from '@/lib/schemas';
import { categories } from '@/lib/categories-data';
import { TextField, TextAreaField, SelectField, CheckboxGroupField } from '@/components/forms/FormFields';
import Button from '@/components/ui/Button';
import { useEnquiry } from '@/context/EnquiryContext';

export default function BuyerEnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { items } = useEnquiry();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<BuyerEnquiryFormValues>({
    resolver: zodResolver(buyerEnquirySchema),
    defaultValues: { productsOfInterest: [] },
  });

  async function onSubmit(values: BuyerEnquiryFormValues) {
    if (values.website) return; // honeypot triggered — silently drop
    setStatus('submitting');
    // [Integration point] POST to your API route / CRM / email service, e.g.:
    // await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify({ ...values, basket: items }) });
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus('success');
    reset();
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl2 border border-seagreen/30 bg-seagreen/5 px-6 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-seagreen" strokeWidth={1.5} />
        <h3 className="font-serif text-2xl text-ink">Enquiry received</h3>
        <p className="max-w-md text-sm text-ink-light">
          Thank you for reaching out to MeaningWood Crafts. Our export team reviews every enquiry
          personally and will respond within 1–2 business days with pricing guidance and next steps.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus('idle')} type="button">
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" />

      {items.length > 0 && (
        <div className="rounded-lg border border-ocean/15 bg-sand-50 px-4 py-3 text-sm text-ink-light">
          <strong className="text-ink">{items.length} item(s) from your Enquiry Basket</strong> will be
          attached to this enquiry: {items.map((i) => `${i.name} (x${i.quantity})`).join(', ')}.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Full Name" required placeholder="Jane Cooper" error={errors.fullName?.message} {...register('fullName')} />
        <TextField label="Company Name" required placeholder="Cooper Trading Co." error={errors.companyName?.message} {...register('companyName')} />
        <TextField label="Business Email" type="email" required placeholder="jane@cooperco.com" error={errors.email?.message} {...register('email')} />
        <TextField label="Phone / WhatsApp" required placeholder="+230 5XXX XXXX" error={errors.phone?.message} {...register('phone')} />
        <TextField label="Country" required placeholder="Mauritius" error={errors.country?.message} {...register('country')} />
        <SelectField label="Business Type" required options={businessTypes} error={errors.businessType?.message} {...register('businessType')} />
      </div>

      <Controller
        control={control}
        name="productsOfInterest"
        render={({ field }) => (
          <CheckboxGroupField
            label="Products of Interest"
            required
            error={errors.productsOfInterest?.message}
            options={categories.map((c) => c.name)}
            values={field.value ?? []}
            onToggle={(value) => {
              const current = field.value ?? [];
              field.onChange(
                current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
              );
            }}
          />
        )}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Estimated Order Quantity"
          required
          options={quantityRanges}
          error={errors.estimatedQuantity?.message}
          {...register('estimatedQuantity')}
        />
        <SelectField
          label="Preferred Shipping Terms (Incoterm)"
          options={incoterms}
          error={errors.incoterm?.message}
          {...register('incoterm')}
        />
      </div>

      <TextField
        label="Target Market(s) for Resale"
        required
        placeholder="e.g. Mauritius — resort gift shops"
        error={errors.targetMarkets?.message}
        {...register('targetMarkets')}
      />

      <TextAreaField
        label="Tell Us About Your Requirements"
        required
        placeholder="Share your product interests, target retail price points, branding needs, or any specific questions for our export team."
        error={errors.message?.message}
        {...register('message')}
      />

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting
          </>
        ) : (
          <>
            Submit Buyer Enquiry <Send className="h-4 w-4" />
          </>
        )}
      </Button>
      <p className="text-xs text-ink-muted">
        By submitting, you agree to be contacted by our export team regarding your enquiry. See our{' '}
        <a href="/privacy-policy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
