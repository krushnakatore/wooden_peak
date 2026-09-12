import { forwardRef, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

const baseInputClasses =
  'w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-seagreen/40 transition-colors';

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}

export function FieldWrapper({ label, htmlFor, required, error, children, className }: FieldWrapperProps) {
  return (
    <div className={clsx('flex flex-col gap-1.5', className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-wood">*</span>}
      </label>
      {children}
      {error && <p className="text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, error, required, id, className, ...rest },
  ref
) {
  const fieldId = id ?? rest.name;
  return (
    <FieldWrapper label={label} htmlFor={fieldId as string} required={required} error={error}>
      <input
        ref={ref}
        id={fieldId}
        className={clsx(baseInputClasses, error ? 'border-red-400' : 'border-ocean/15', className)}
        {...rest}
      />
    </FieldWrapper>
  );
});

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(function TextAreaField(
  { label, error, required, id, className, rows = 4, ...rest },
  ref
) {
  const fieldId = id ?? rest.name;
  return (
    <FieldWrapper label={label} htmlFor={fieldId as string} required={required} error={error}>
      <textarea
        ref={ref}
        id={fieldId}
        rows={rows}
        className={clsx(baseInputClasses, 'resize-none', error ? 'border-red-400' : 'border-ocean/15', className)}
        {...rest}
      />
    </FieldWrapper>
  );
});

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  required?: boolean;
  options: readonly string[];
  placeholder?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(function SelectField(
  { label, error, required, id, className, options, placeholder = 'Please select', ...rest },
  ref
) {
  const fieldId = id ?? rest.name;
  return (
    <FieldWrapper label={label} htmlFor={fieldId as string} required={required} error={error}>
      <select
        ref={ref}
        id={fieldId}
        className={clsx(baseInputClasses, error ? 'border-red-400' : 'border-ocean/15', className)}
        defaultValue=""
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
});

interface CheckboxGroupProps {
  label: string;
  required?: boolean;
  error?: string;
  options: readonly string[];
  values: string[];
  onToggle: (value: string) => void;
  columns?: 1 | 2;
}

export function CheckboxGroupField({
  label,
  required,
  error,
  options,
  values,
  onToggle,
  columns = 2,
}: CheckboxGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-ink">
        {label} {required && <span className="text-wood">*</span>}
      </p>
      <div className={clsx('grid gap-2', columns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1')}>
        {options.map((opt) => {
          const checked = values.includes(opt);
          return (
            <label
              key={opt}
              className={clsx(
                'flex cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-sm transition-colors',
                checked ? 'border-seagreen bg-seagreen/5 text-ocean-dark' : 'border-ocean/15 text-ink-light hover:border-ocean/30'
              )}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(opt)}
                className="h-4 w-4 shrink-0 accent-seagreen"
              />
              {opt}
            </label>
          );
        })}
      </div>
      {error && <p className="text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
