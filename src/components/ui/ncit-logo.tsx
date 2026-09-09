import Image from 'next/image';

interface NcitLogoProps {
  className?: string;
  variant?: "default" | "white";
  priority?: boolean;
}

/**
 * The NCIT logo.
 *
 * This renders the chamber's real artwork rather than a redrawn approximation.
 * The source is the original logo carried over from the previous site, at
 * public/wp-content/uploads/2016/04/logo_NCIT_small.jpg. That file is a 200x86
 * JPEG on solid white with no alpha, so it cannot be used directly: it shows a
 * white box against the dark footer. The files under public/logo/ are that same
 * artwork upscaled and keyed to a transparent background, in brand blue and in
 * white for dark surfaces.
 *
 * Regenerate them with scripts/build-logo.mjs if the source artwork changes.
 */
export default function NcitLogo({ className = "", variant = "default", priority = false }: NcitLogoProps) {
  const src = variant === "white" ? "/logo/ncit-logo-white.png" : "/logo/ncit-logo.png";

  return (
    <Image
      src={src}
      alt="NCIT - The Gateway to Northern ICT"
      width={200}
      height={86}
      priority={priority}
      className={className}
    />
  );
}
