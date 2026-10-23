import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'gold' | 'subtle';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  variant = 'gold',
}) => {
  const strokeColor = variant === 'gold' ? '#D4AF65' : '#D8C9B2';
  return (
    <div
      className={`flex items-center justify-center gap-3 select-none ${className}`}
      aria-hidden="true"
    >
      <span
        className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent"
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${strokeColor})` }}
      />
      <svg
        width="36"
        height="16"
        viewBox="0 0 36 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M18 1L21.5 6.5L27 8L21.5 9.5L18 15L14.5 9.5L9 8L14.5 6.5L18 1Z"
          stroke={strokeColor}
          strokeWidth="1.2"
          fill="#351014"
        />
        <circle cx="4" cy="8" r="1.5" fill={strokeColor} fillOpacity="0.7" />
        <circle cx="32" cy="8" r="1.5" fill={strokeColor} fillOpacity="0.7" />
      </svg>
      <span
        className="h-[1px] w-12 sm:w-20"
        style={{ backgroundImage: `linear-gradient(to left, transparent, ${strokeColor})` }}
      />
    </div>
  );
};
