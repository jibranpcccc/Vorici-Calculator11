import { SocketColor } from '@/lib/calculations/types';

interface SocketSelectorProps {
  colors: SocketColor[];
  onSocketClick: (index: number) => void;
  className?: string;
}

const socketClasses: Record<SocketColor, string> = {
  red: 'socket-red',
  green: 'socket-green',
  blue: 'socket-blue',
  white: 'socket-white',
  disabled: 'socket-disabled opacity-50',
};

export function SocketSelector({ colors, onSocketClick, className = '' }: SocketSelectorProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {colors.map((color, index) => (
        <button
          key={index}
          className={`w-12 h-12 rounded-full cursor-pointer border-2 border-white/20 hover:border-poe-gold transition-colors ${socketClasses[color]}`}
          onClick={() => onSocketClick(index)}
          title={`Socket ${index + 1}: ${color} (click to cycle)`}
        />
      ))}
    </div>
  );
}
