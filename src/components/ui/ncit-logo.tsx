import React from 'react';

interface NcitLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  variant?: "default" | "white";
}

export default function NcitLogo({ className = "", variant = "default", ...props }: NcitLogoProps) {
  const colorClass = variant === "white" ? "text-white" : "text-ncit-blue";
  
  return (
    <svg 
      width="220" 
      height="65" 
      viewBox="0 0 220 65" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${colorClass} ${className}`}
      {...props}
    >
      <g stroke="currentColor" fill="currentColor">
        {/* Row 1 */}
        <circle cx="12" cy="12" r="5" fill="none" strokeWidth="1.5"/>
        <circle cx="30" cy="12" r="5" fill="none" strokeWidth="1.5"/>
        <circle cx="48" cy="12" r="5.75" stroke="none"/>
        
        {/* Row 2 */}
        <circle cx="12" cy="30" r="5.75" stroke="none"/>
        <circle cx="30" cy="30" r="5.75" stroke="none"/>
        <circle cx="48" cy="30" r="5" fill="none" strokeWidth="1.5"/>
        
        {/* Row 3 */}
        <circle cx="12" cy="48" r="5" fill="none" strokeWidth="1.5"/>
        <circle cx="30" cy="48" r="5.75" stroke="none"/>
        <circle cx="48" cy="48" r="5.75" stroke="none"/>
      </g>
      
      {/* NCIT Text */}
      <text 
        x="60" 
        y="50" 
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
        fontSize="48" 
        fontWeight="300" 
        letterSpacing="-1.5" 
        fill="currentColor"
      >
        NCIT
      </text>

      {/* Subtitle */}
      <text 
        x="3" 
        y="62" 
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
        fontSize="9" 
        fontWeight="400" 
        letterSpacing="2.5" 
        fill="currentColor"
        className="opacity-80"
      >
        The Gateway to Northern ICT
      </text>
    </svg>
  );
}
