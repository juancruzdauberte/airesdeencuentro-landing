"use client";

import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "scale-down";
}

/**
 * Optimized image component using Next.js Image for:
 * - Automatic format conversion (WebP, AVIF)
 * - Responsive sizing
 * - Lazy loading (default)
 * - Priority loading for critical images
 */
export default function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  fill = false,
  objectFit = "cover",
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      quality={85}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={className}
      style={{
        objectFit,
        objectPosition: "center",
      }}
    />
  );
}
