import React from 'react';
import SDG_COLORS from '../data/sdgColors';

export default function SdgIcon({ num, size = 'md', className = '' }) {
  const padded = String(num).padStart(2, '0');
  const sizeClass = size === 'sm' ? 'w-10 h-10' : 'w-12 h-12';

  return (
    <>
      <img
        src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${padded}.jpg`}
        alt={`SDG ${num}`}
        className={`${sizeClass} rounded-lg object-cover ${className}`}
        onError={(e) => {
          e.target.style.display = 'none';
          if (e.target.nextSibling) {
            e.target.nextSibling.style.display = 'flex';
          }
        }}
      />
      <div
        className={`${sizeClass} rounded-lg items-center justify-center text-white font-bold text-sm hidden ${className}`}
        style={{ backgroundColor: SDG_COLORS[num] }}
      >
        {num}
      </div>
    </>
  );
}
