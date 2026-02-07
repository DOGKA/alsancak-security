import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

interface GlobeBgProps {
  dark?: boolean;
  className?: string;
}

const markers = [
  { location: [39.9, 32.8] as [number, number], size: 0.08 },
  { location: [34.5, 69.1] as [number, number], size: 0.06 },
  { location: [33.3, 44.3] as [number, number], size: 0.06 },
  { location: [32.9, 13.1] as [number, number], size: 0.06 },
  { location: [2.0, 45.3] as [number, number], size: 0.06 },
  { location: [0.3, 32.6] as [number, number], size: 0.06 },
  { location: [35.0, 38.0] as [number, number], size: 0.06 },
  { location: [12.8, 45.0] as [number, number], size: 0.05 },
];

export default function GlobeBg({ dark = true, className = '' }: GlobeBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: dark ? 1 : 0,
      diffuse: dark ? 1.5 : 1.2,
      mapSamples: 16000,
      mapBrightness: dark ? 6 : 4,
      baseColor: dark ? [0.15, 0.15, 0.17] : [0.95, 0.95, 0.97],
      markerColor: [0.75, 0.22, 0.17],
      glowColor: dark ? [0.08, 0.08, 0.1] : [0.9, 0.9, 0.92],
      markers,
      onRender: (state) => {
        state.phi = phi;
        phi += 0.002;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        contain: 'layout paint size',
        opacity: 0.6,
      }}
    />
  );
}
