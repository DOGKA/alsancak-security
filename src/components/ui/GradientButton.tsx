import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import s from './GradientButton.module.css';

interface GradientButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function GradientButton({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: GradientButtonProps) {
  const cls = `${s.button} ${s[size]} ${s[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
