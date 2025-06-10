
import React from 'react';

export const StrengthIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 2L4 7v10l8 5 8-5V7l-8-5z" 
      fill="#dc2626" 
      stroke="#dc2626" 
      strokeWidth="1.5" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 8v8M8 10l8 4M16 10l-8 4" 
      stroke="white" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

export const DexterityIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle 
      cx="12" 
      cy="12" 
      r="8" 
      fill="#16a34a" 
      stroke="#16a34a" 
      strokeWidth="1.5"
    />
    <path 
      d="M12 8l-4 4 4 4 4-4-4-4z" 
      fill="white"
    />
  </svg>
);

export const IntelligenceIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect 
      x="4" 
      y="8" 
      width="16" 
      height="8" 
      rx="2" 
      fill="#2563eb" 
      stroke="#2563eb" 
      strokeWidth="1.5"
    />
    <path 
      d="M8 12h8M10 10h4M10 14h4" 
      stroke="white" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M12 8V6M12 18v-2" 
      stroke="#2563eb" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

export const ChromaticOrbIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#chromaticGradient)" stroke="#d4af37" strokeWidth="2"/>
    <defs>
      <radialGradient id="chromaticGradient" cx="0.5" cy="0.5" r="0.8">
        <stop offset="0%" stopColor="#dc2626"/>
        <stop offset="33%" stopColor="#16a34a"/>
        <stop offset="66%" stopColor="#2563eb"/>
        <stop offset="100%" stopColor="#dc2626"/>
      </radialGradient>
    </defs>
    <circle cx="12" cy="12" r="6" fill="none" stroke="white" strokeWidth="1"/>
    <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="1.5"/>
  </svg>
);

export const JewellersOrbIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#4b5563" stroke="#d4af37" strokeWidth="2"/>
    <circle cx="8" cy="8" r="2" fill="#dc2626"/>
    <circle cx="16" cy="8" r="2" fill="#16a34a"/>
    <circle cx="8" cy="16" r="2" fill="#2563eb"/>
    <circle cx="16" cy="16" r="2" fill="#ffffff"/>
    <circle cx="12" cy="12" r="1.5" fill="#d4af37"/>
  </svg>
);

export const FusingOrbIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#7c2d12" stroke="#d4af37" strokeWidth="2"/>
    <path d="M8 8h8v8H8z" fill="none" stroke="white" strokeWidth="1.5"/>
    <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="1"/>
    <circle cx="8" cy="8" r="1" fill="#d4af37"/>
    <circle cx="16" cy="8" r="1" fill="#d4af37"/>
    <circle cx="8" cy="16" r="1" fill="#d4af37"/>
    <circle cx="16" cy="16" r="1" fill="#d4af37"/>
  </svg>
);
