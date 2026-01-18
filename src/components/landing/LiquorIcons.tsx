import { SVGProps } from "react";

export const WineBottle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 2h4v4l2 3v11a2 2 0 01-2 2h-4a2 2 0 01-2-2V9l2-3V2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12h4M10 15h4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const WineGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 2h8l-1 7a4 4 0 01-3 3.9V18h3v2H9v-2h3v-5.1A4 4 0 019 9L8 2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 5h8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const WhiskeyGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5 6l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12H5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 6h16M8 10h8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CocktailGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4 4h16l-6 8v6h4v2H6v-2h4v-6L4 4z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="18" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ClinkingGlasses = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.5 2h5l-.5 6a2.5 2.5 0 01-2 2.4V14h1.5v2h-5v-2H6v-3.6A2.5 2.5 0 014 8l-.5-6z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 2h5l-.5 6a2.5 2.5 0 01-2 2.4V14h1.5v2h-5v-2H14v-3.6a2.5 2.5 0 01-2-2.4l-.5-6z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 20l4-4m4 4l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BottleWithPin = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 4h4v3l1.5 2v9a1.5 1.5 0 01-1.5 1.5H8A1.5 1.5 0 016.5 18V9L8 7V4z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="17" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="8" r="1.5" fill="currentColor" />
    <path d="M17 12v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CocktailWithArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4 4h10l-4 6v6h3v2H5v-2h3v-6L4 4z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 10h6M19 7l3 3-3 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WineBottleSilhouette = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 0h8v12l6 10v68c0 5.5-4.5 10-10 10S10 95.5 10 90V22l6-10V0z" />
  </svg>
);

export const WineGlassSilhouette = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 0h30l-5 30c-1 6-5 10-10 11v29h8v10H12v-10h8V41c-5-1-9-5-10-11L5 0z" />
  </svg>
);

export const ShelfPattern = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="0" y="95" width="400" height="4" fill="currentColor" opacity="0.3" />
    <rect x="0" y="195" width="400" height="4" fill="currentColor" opacity="0.3" />
    <path d="M30 50h10v45H30z" fill="currentColor" opacity="0.15" />
    <path d="M50 40h10v55H50z" fill="currentColor" opacity="0.1" />
    <path d="M80 55h10v40H80z" fill="currentColor" opacity="0.15" />
    <path d="M110 45h10v50h-10z" fill="currentColor" opacity="0.1" />
    <path d="M150 50h10v45h-10z" fill="currentColor" opacity="0.15" />
    <path d="M180 40h10v55h-10z" fill="currentColor" opacity="0.1" />
    <path d="M220 55h10v40h-10z" fill="currentColor" opacity="0.15" />
    <path d="M260 45h10v50h-10z" fill="currentColor" opacity="0.1" />
    <path d="M300 50h10v45h-10z" fill="currentColor" opacity="0.15" />
    <path d="M340 40h10v55h-10z" fill="currentColor" opacity="0.1" />
    <path d="M370 55h10v40h-10z" fill="currentColor" opacity="0.15" />
  </svg>
);

export const PremiumBottle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 60 140" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M22 0h16v16l8 12v100c0 6.6-5.4 12-12 12H26c-6.6 0-12-5.4-12-12V28l8-12V0z"
      fill="url(#bottleGradient)"
    />
    <rect x="20" y="50" width="20" height="30" rx="2" fill="currentColor" opacity="0.3" />
    <defs>
      <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);
