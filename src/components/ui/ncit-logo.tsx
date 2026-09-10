import Image from 'next/image';

interface NcitLogoProps {
  className?: string;
  variant?: "default" | "white";
  priority?: boolean;
}

/**
 * The NCIT logo.
 *
 * The files under public/logo/ are built from the chamber's own artwork by
 * scripts/build-logo.mjs: brand blue for light surfaces, and the light
 * colourway for dark ones. Both are transparent, so the logo sits on the dark
 * footer without a white box behind it.
 *
 * Re-run that script if the artwork changes. It also rebuilds the favicon and
 * the app icons from the same source, so they never drift apart.
 */
export default function NcitLogo({ className = "", variant = "default", priority = false }: NcitLogoProps) {
  const src = variant === "white" ? "/logo/ncit-logo-white.png" : "/logo/ncit-logo.png";

  return (
    <Image
      src={src}
      alt="NCIT - The Gateway to Northern ICT"
      width={200}
      height={74}
      priority={priority}
      className={className}
    />
  );
}
