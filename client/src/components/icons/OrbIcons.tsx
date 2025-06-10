export function ChromaticOrbIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="url(#chromaticGradient)" stroke="#444" strokeWidth="2"/>
      <circle cx="16" cy="16" r="10" fill="url(#chromaticInner)"/>
      <circle cx="16" cy="16" r="6" fill="url(#chromaticCore)"/>
      <defs>
        <radialGradient id="chromaticGradient" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="#ff4444"/>
          <stop offset="33%" stopColor="#44ff44"/>
          <stop offset="66%" stopColor="#4444ff"/>
          <stop offset="100%" stopColor="#ff4444"/>
        </radialGradient>
        <radialGradient id="chromaticInner" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="#ff6666"/>
          <stop offset="50%" stopColor="#66ff66"/>
          <stop offset="100%" stopColor="#6666ff"/>
        </radialGradient>
        <radialGradient id="chromaticCore" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function JewellersOrbIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="url(#jewellersGradient)" stroke="#444" strokeWidth="2"/>
      <circle cx="16" cy="16" r="10" fill="url(#jewellersInner)"/>
      <circle cx="12" cy="12" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="20" cy="12" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="16" cy="20" r="2" fill="#fff" opacity="0.8"/>
      <defs>
        <radialGradient id="jewellersGradient" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="#ffd700"/>
          <stop offset="100%" stopColor="#b8860b"/>
        </radialGradient>
        <radialGradient id="jewellersInner" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="#ffef94"/>
          <stop offset="100%" stopColor="#daa520"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function FusingOrbIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="url(#fusingGradient)" stroke="#444" strokeWidth="2"/>
      <circle cx="16" cy="16" r="10" fill="url(#fusingInner)"/>
      <path d="M8 16L16 8L24 16L16 24Z" fill="url(#fusingDiamond)" opacity="0.8"/>
      <defs>
        <radialGradient id="fusingGradient" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="#ff6b35"/>
          <stop offset="100%" stopColor="#cc2900"/>
        </radialGradient>
        <radialGradient id="fusingInner" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="#ff8c5a"/>
          <stop offset="100%" stopColor="#e55100"/>
        </radialGradient>
        <linearGradient id="fusingDiamond" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#ffccaa"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function StrengthIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L8 6V10L12 14L16 10V6L12 2Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1"/>
      <path d="M10 8H14V10H10V8Z" fill="#991b1b"/>
    </svg>
  );
}

export function DexterityIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12L12 4L20 12L12 20L4 12Z" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
      <path d="M10 10L14 10L12 14L10 10Z" fill="#15803d"/>
    </svg>
  );
}

export function IntelligenceIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1"/>
      <rect x="10" y="11" width="4" height="10" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1"/>
      <circle cx="12" cy="18" r="2" fill="#1d4ed8"/>
    </svg>
  );
}