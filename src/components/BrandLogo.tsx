import { SVGProps } from 'react';

export default function BrandLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="swosh" x1="50" y1="100" x2="380" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DBB040" />
          <stop offset="50%" stopColor="#EAD07F" />
          <stop offset="100%" stopColor="#DBB040" />
        </linearGradient>
      </defs>
      
      {/* The ^ chevron shape */}
      <path 
        d="M 50 90 L 130 30 L 160 30 L 260 90 L 205 90 L 150 45 L 140 45 L 85 90 Z" 
        fill="currentColor" 
        opacity="0.3"
      />
      
      {/* The curved gold swoop */}
      <path 
        d="M 45 90 C 130 90, 210 75, 380 5 C 210 80, 130 92, 45 92 Z" 
        fill="url(#swosh)" 
      />
      
      {/* AIRCRAFT (left) */}
      <text x="45" y="105" fill="currentColor" fontFamily="sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.4em">
        AIRCRAFT
      </text>
      
      {/* MANAGEMENT GROUP INC (left below) */}
      <text x="45" y="115" fill="currentColor" opacity="0.7" fontFamily="sans-serif" fontSize="6" letterSpacing="0.3em">
        MANAGEMENT GROUP INC.
      </text>
      
      {/* AMG JETS (right) */}
      <text x="210" y="105" fill="currentColor" fontFamily="sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.4em">
        AMG JETS
      </text>
      
      {/* PRIVATE AIRCRAFT CHARTER (right below) */}
      <text x="210" y="115" fill="currentColor" opacity="0.7" fontFamily="sans-serif" fontSize="6" letterSpacing="0.3em">
        PRIVATE AIRCRAFT CHARTER
      </text>
    </svg>
  );
}
