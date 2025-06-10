import { SocketColor } from '@/lib/types';

interface SocketVisualizerProps {
  colors: SocketColor[];
  activeCount: number;
  onColorChange: (index: number, color: SocketColor) => void;
}

const colorCycle: SocketColor[] = ['red', 'green', 'blue', 'white', 'disabled'];

const getSocketClass = (color: SocketColor) => {
  switch (color) {
    case 'red': return 'socket-red';
    case 'green': return 'socket-green';
    case 'blue': return 'socket-blue';
    case 'white': return 'socket-white';
    case 'disabled': return 'socket-disabled opacity-50';
    default: return 'socket-disabled';
  }
};

export default function SocketVisualizer({ colors, activeCount, onColorChange }: SocketVisualizerProps) {
  const handleSocketClick = (index: number) => {
    if (index >= activeCount) return;
    
    const currentColor = colors[index];
    const currentIndex = colorCycle.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % colorCycle.length;
    onColorChange(index, colorCycle[nextIndex]);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-12 h-12 rounded-full cursor-pointer border-2 border-white/20 hover:border-poe-gold transition-colors ${getSocketClass(color)} ${
              index >= activeCount ? 'opacity-30 cursor-not-allowed' : ''
            }`}
            onClick={() => handleSocketClick(index)}
            title={`Socket ${index + 1}: ${color} (${index < activeCount ? 'Click to change' : 'Inactive'})`}
          />
        ))}
      </div>
      <p className="text-sm text-poe-text-dim">
        Click sockets to cycle colors: Red → Green → Blue → White → Disabled
        <br />
        Active sockets: {activeCount}/6
      </p>
    </div>
  );
}
