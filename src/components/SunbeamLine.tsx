interface SunbeamLineProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
}

export function SunbeamLine({ startX, startY, endX, endY, color }: SunbeamLineProps) {
  const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;

  return (
    <div
      className="absolute opacity-30 pointer-events-none"
      style={{
        left: startX,
        top: startY,
        width: length,
        height: '3px',
        background: `linear-gradient(to right, ${color}, transparent)`,
        transformOrigin: '0 50%',
        transform: `rotate(${angle}deg)`,
        zIndex: 1
      }}
    />
  );
}