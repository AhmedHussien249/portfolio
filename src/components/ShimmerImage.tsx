'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion } from 'framer-motion';

interface ShimmerImageProps extends Omit<ImageProps, 'onLoad'> {
  className?: string;
  containerClassName?: string;
}

export default function ShimmerImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  width,
  height,
  fill,
  ...props
}: ShimmerImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden bg-slate-950/80 rounded-xl border border-slate-800/40 ${containerClassName}`}
      style={!fill && width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
    >
      {/* Shimmer Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.4) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(15, 23, 42, 0.4) 100%)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['200% 0%', '-200% 0%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`transition-all duration-700 ease-out ${
          isLoaded ? 'scale-100 blur-0 opacity-100' : 'scale-105 blur-sm opacity-0'
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
