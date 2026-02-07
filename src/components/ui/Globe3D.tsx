import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import s from './Globe3D.module.css';

const markers = [
  { name: 'Türkiye', location: [39.9, 32.8] as [number, number], size: 0.08 },
  { name: 'Afganistan', location: [34.5, 69.1] as [number, number], size: 0.06 },
  { name: 'Irak', location: [33.3, 44.3] as [number, number], size: 0.06 },
  { name: 'Libya', location: [32.9, 13.1] as [number, number], size: 0.06 },
  { name: 'Somali', location: [2.0, 45.3] as [number, number], size: 0.06 },
  { name: 'Uganda', location: [0.3, 32.6] as [number, number], size: 0.06 },
  { name: 'Suriye', location: [35.0, 38.0] as [number, number], size: 0.06 },
  { name: 'Aden Körfezi', location: [12.8, 45.0] as [number, number], size: 0.05 },
];

export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0.3;
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
      phi: 0.3,
      theta: 0.15,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 4,
      baseColor: [0.95, 0.95, 0.97],
      markerColor: [0.75, 0.22, 0.17],
      glowColor: [0.9, 0.9, 0.92],
      markers: markers.map(m => ({ location: m.location, size: m.size })),
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className={s.wrapper}>
      <canvas
        ref={canvasRef}
        className={s.canvas}
      />
      <div className={s.labels}>
        {markers.map((m) => (
          <span key={m.name} className={s.label}>{m.name}</span>
        ))}
      </div>
    </div>
  );
}
