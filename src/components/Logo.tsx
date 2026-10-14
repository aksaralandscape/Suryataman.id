import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <div className={`inline-flex items-center ${light ? 'bg-white/95 p-1.5 rounded-xl shadow-xs' : ''}`}>
        <img
          src="https://res.cloudinary.com/i5cu5jam/image/upload/f_auto,q_auto/IMG_0741"
          alt="Surya Taman Logo"
          className="h-9 sm:h-11 md:h-12 w-auto object-contain max-w-[200px]"
          loading="eager"
        />
      </div>
    </div>
  );
};
