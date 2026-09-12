import Link from 'next/link';
import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
type Size = 'xs' | 'sm' | 'md' | 'lg';

const VARIANT_CLASSES: Record<Variant, string> = {
  // Neon cyan reads best with dark text, not white, to stay accessible
  primary: 'bg-wood text-white hover:bg-wood-dark shadow-soft',
  secondary: 'bg-ocean text-ink font-bold hover:bg-ocean-dark hover:text-white shadow-soft',
  accent: 'bg-seagreen text-white hover:bg-seagreen-dark shadow-soft',
  outline: 'border-2 border-ocean text-ocean-dark hover:bg-ocean hover:text-ink',
  ghost: 'text-ocean-dark hover:bg-ocean/5',
};

const SIZE_CLASSES: Record<Size, string> = {
  xs: 'px-3.5 py-1.5 text-[13px]',
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-4 text-base sm:text-lg',
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: ReactNode;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    className,
    children,
  } = props;

  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 whitespace-nowrap',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seagreen',
    'disabled:opacity-50 disabled:pointer-events-none',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if ('href' in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  const {
    variant: _variant,
    size: _size,
    icon: _icon,
    iconPosition: _iconPosition,
    className: _className,
    children: _children,
    ...restButtonProps
  } = props as ButtonAsButton;

  return (
    <button {...restButtonProps} className={classes}>
      {content}
    </button>
  );
}
