import { SocketColor } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface SocketVisualizerProps {
  colors: SocketColor[];
  activeCount: number;
  onColorChange: (index: number, color: SocketColor) => void;
}

const colorOptions: { color: SocketColor; label: string; className: string }[] = [
  { color: 'red', label: 'Red (Str)', className: 'bg-red-500 hover:bg-red-600' },
  { color: 'green', label: 'Green (Dex)', className: 'bg-green-500 hover:bg-green-600' },
  { color: 'blue', label: 'Blue (Int)', className: 'bg-blue-500 hover:bg-blue-600' },
  { color: 'white', label: 'White', className: 'bg-gray-300 hover:bg-gray-400 text-black' },
];

const getSocketClass = (color: SocketColor) => {
  switch (color) {
    case 'red': return 'socket-red bg-red-500 border-red-600';
    case 'green': return 'socket-green bg-green-500 border-green-600';
    case 'blue': return 'socket-blue bg-blue-500 border-blue-600';
    case 'white': return 'socket-white bg-gray-300 border-gray-400';
    case 'disabled': return 'socket-disabled bg-gray-700 border-gray-600 opacity-50';
    default: return 'socket-disabled bg-gray-700 border-gray-600';
  }
};

export default function SocketVisualizer({ colors, activeCount, onColorChange }: SocketVisualizerProps) {
  const [selectedSocket, setSelectedSocket] = useState<number | null>(null);

  const handleSocketClick = (index: number) => {
    if (index >= activeCount) return;
    setSelectedSocket(selectedSocket === index ? null : index);
  };

  const handleColorSelect = (color: SocketColor) => {
    if (selectedSocket !== null) {
      onColorChange(selectedSocket, color);
      setSelectedSocket(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex gap-2 justify-center">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-14 h-14 rounded-full cursor-pointer border-3 transition-all duration-200 ${getSocketClass(color)} ${
                index >= activeCount ? 'opacity-30 cursor-not-allowed' : ''
              } ${
                selectedSocket === index ? 'ring-4 ring-poe-gold scale-110' : 'hover:scale-105'
              }`}
              onClick={() => handleSocketClick(index)}
              title={`Socket ${index + 1}: ${color} ${index < activeCount ? '(Click to select)' : '(Inactive)'}`}
            >
              <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-poe-text-dim">
          Active sockets: {activeCount}/6
          {selectedSocket !== null && (
            <span className="block text-poe-gold mt-1">
              Socket {selectedSocket + 1} selected - Choose a color below
            </span>
          )}
        </p>
      </div>

      {selectedSocket !== null && (
        <div className="space-y-3 p-4 bg-poe-dark/50 rounded-lg border border-poe-gold/30">
          <h4 className="text-sm font-medium text-poe-gold text-center">
            Choose Color for Socket {selectedSocket + 1}
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {colorOptions.map((option) => (
              <Button
                key={option.color}
                onClick={() => handleColorSelect(option.color)}
                className={`${option.className} border-2 border-transparent hover:border-poe-gold transition-all duration-200`}
                size="sm"
              >
                {option.label}
              </Button>
            ))}
          </div>
          <Button
            onClick={() => setSelectedSocket(null)}
            variant="outline"
            size="sm"
            className="w-full border-poe-gold/50 text-poe-text-dim hover:bg-poe-surface/20"
          >
            Cancel
          </Button>
        </div>
      )}

      {selectedSocket === null && (
        <p className="text-sm text-poe-text-dim text-center">
          Click on a socket above to change its color
        </p>
      )}
    </div>
  );
}
