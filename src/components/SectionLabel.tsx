import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'mint';
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  variant = 'light',
  className = '',
}) => {
  const colorClass =
    variant === 'dark'
      ? 'text-[#48B878]'
      : variant === 'mint'
      ? 'text-[#20834D]'
      : 'text-[#20834D]';

  return (
    <div
      className={`inline-block text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase mb-4 sm:mb-5 ${colorClass} ${className}`}
    >
      {children}
    </div>
  );
};
