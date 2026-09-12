'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { CheckCircle2, Loader2, Send, UploadCloud, FileImage, X } from 'lucide-react';
import {
  customPrivateLabelSchema,
  CustomPrivateLabelFormValues,
  customisationTypes,
  quantityRanges,
} from '@/lib/schemas';
import { categories } from '@/lib/categories-data';
import { TextField, TextAreaField, SelectField, CheckboxGroupField } from '@/components/forms/FormFields';
import Button from '@/components/ui/Button';

export default function CustomPrivateLabelForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CustomPrivateLabelFormValues>({
    resolver: zodResolver(customPrivateLabelSchema),
    defaultValues: { customisationTypes: [] },
  });

  async function onSubmit(values: CustomPrivateLabelFormValues) {
    if (values.website) return; // honeypot triggered — silently drop
    setStatus('submitting');
    // [Integration point] POST to your API route / CRM, including the uploaded reference file, e.g.:
    // const formData = new FormData(); ...append values + file... await fetch('/api/custom-enquiry', { method: 'POST', body: formData });
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus('success');
    reset();
    setFileName(null);
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl2 border border-seagreen/30 bg-seagreen/5 px-6 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-seagreen" strokeWidth={1.5} />
        <h3 className="font-serif text-2xl text-ink">Custom enquiry received</h3>
        <p className="max-w-md text-sm text-ink-light">
          Thank you for sharing your private label requirements. Our design and export team will
          review your brief and respond within 2–3 business days with feasibility, indicative pricing,
          and a recommended sample plan.
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

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Full Name" required placeholder="Jane Cooper" error={errors.fullName?.message} {...register('fullName')} />
        <TextField label="Company Name" required placeholder="Cooper Trading Co." error={errors.companyName?.message} {...register('companyName')} />
        <TextField label="Business Email" type="email" required placeholder="jane@cooperco.com" error={errors.email?.message} {...register('email')} />
        <TextField label="Phone / WhatsApp" required placeholder="+230 5XXX XXXX" error={errors.phone?.message} {...register('phone')} />
        <TextField label="Country" required placeholder="Mauritius" error={errors.country?.message} {...register('country')} />
        <SelectField
          label="Product Category of Interest"
          required
          options={categories.map((c) => c.name)}
          error={errors.productCategory?.message}
          {...register('productCategory')}
        />
      </div>

      <Controller
        control={control}
        name="customisationTypes"
        render={({ field }) => (
          <CheckboxGroupField
            label="Customisation Type"
            required
            error={errors.customisationTypes?.message}
            options={customisationTypes}
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

      <div className="grid gap-5 sm:grid-cols-3">
        <SelectField
          label="Estimated Order Quantity"
          required
          options={quantityRanges}
          error={errors.estimatedQuantity?.message}
          {...register('estimatedQuantity')}
        />
        <TextField
          label="Target Price (per unit)"
          placeholder="e.g. USD 3.50 / pc (FOB)"
          error={errors.targetPrice?.message}
          {...register('targetPrice')}
        />
        <TextField
          label="Required Delivery Date"
          type="date"
          error={errors.requiredDeliveryDate?.message}
          {...register('requiredDeliveryDate')}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="referenceImage" className="text-sm font-medium text-ink">
          Upload Logo / Reference Design <span className="text-ink-muted font-normal">(optional)</span>
        </label>
        <label
          htmlFor="referenceImage"
          className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-ocean/20 bg-sand-50 px-4 py-8 text-center transition-colors hover:border-seagreen/50"
        >
          {fileName ? (
            <span className="flex items-center gap-2 text-sm font-medium text-ocean-dark">
              <FileImage className="h-5 w-5" /> {fileName}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setFileName(null);
                }}
                className="ml-1 rounded-full p-0.5 hover:bg-ocean/10"
                aria-label="Remove file"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          ) : (
            <>
              <UploadCloud className="h-7 w-7 text-ink-muted" strokeWidth={1.5} />
              <span className="text-sm text-ink-light">
                Click to upload your logo or reference image (PNG, JPG, PDF — max 10MB)
              </span>
            </>
          )}
          <input
            id="referenceImage"
            type="file"
            accept="image/png,image/jpeg,application/pdf"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
        </label>
      </div>

      <TextAreaField
        label="Additional Requirements"
        required
        placeholder="Describe your desired product specification, packaging, branding placement, or reference products."
        error={errors.additionalRequirements?.message}
        {...register('additionalRequirements')}
      />

      <Button type="submit" variant="secondary" size="lg" className="w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting
          </>
        ) : (
          <>
            Submit Custom Enquiry <Send className="h-4 w-4" />
          </>
        )}
      </Button>
      <p className="text-xs text-ink-muted">
        By submitting, you agree to be contacted by our export team regarding your custom enquiry. See our{' '}
        <a href="/privacy-policy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
