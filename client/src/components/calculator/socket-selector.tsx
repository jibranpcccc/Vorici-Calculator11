import { SocketColor } from '@/lib/calculations/types';

interface SocketSelectorProps {
  colors: SocketColor[];
  onSocketClick: (index: number) => void;
  className?: string;
}

const socketClasses: Record<SocketColor, string> = {
  red: 'socket-red shadow-lg',
  green: 'socket-green shadow-lg',
  blue: 'socket-blue shadow-lg',
  white: 'socket-white shadow-lg',
  disabled: 'socket-disabled opacity-40',
};

const socketEmojis: Record<SocketColor, string> = {
  red: '🔴',
  green: '🟢',
  blue: '🔵',
  white: '⚪',
  disabled: '⚫',
};

export function SocketSelector({ colors, onSocketClick, className = '' }: SocketSelectorProps) {
  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
      {colors.map((color, index) => (
        <div key={index} className="flex flex-col items-center">
          <button
            className={`w-16 h-16 rounded-full cursor-pointer border-3 border-light-slate/30 hover:border-exalted-gold hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center text-2xl ${socketClasses[color]} ${color !== 'disabled' ? 'hover:shadow-xl' : ''}`}
            onClick={() => onSocketClick(index)}
            title={`Socket ${index + 1}: ${color.charAt(0).toUpperCase() + color.slice(1)} (click to cycle)`}
          >
            {socketEmojis[color]}
          </button>
          <span className="text-xs text-light-slate mt-1 font-medium">
            {index + 1}
          </span>
        </div>
      ))}
    </div>
  );
}
