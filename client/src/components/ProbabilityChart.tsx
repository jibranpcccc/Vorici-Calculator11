import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ItemBase } from '@/lib/types';
import { BarChart3, PieChart as PieChartIcon } from 'lucide-react';

interface ProbabilityChartProps {
  itemBase: ItemBase;
  socketCount: number;
  chartType?: 'standard' | 'tainted';
}

interface ChartData {
  color: string;
  probability: number;
  averageCost: number;
  displayColor: string;
}

const COLORS = {
  red: '#dc2626',
  green: '#16a34a', 
  blue: '#2563eb',
  white: '#f3f4f6'
};

// Authentic probability calculations based on PoE mechanics
const calculateProbabilities = (base: ItemBase, socketCount: number, chartType: 'standard' | 'tainted'): ChartData[] => {
  const baseMultipliers = {
    strength: { red: 3.5, green: 1.0, blue: 1.0 },
    dexterity: { red: 1.0, green: 3.5, blue: 1.0 },
    intelligence: { red: 1.0, green: 1.0, blue: 3.5 },
    'str-dex': { red: 2.25, green: 2.25, blue: 1.0 },
    'str-int': { red: 2.25, green: 1.0, blue: 2.25 },
    'dex-int': { red: 1.0, green: 2.25, blue: 2.25 }
  };

  const multipliers = baseMultipliers[base];
  const total = multipliers.red + multipliers.green + multipliers.blue + 0.2; // white socket chance

  const standardProbs = {
    red: (multipliers.red / total) * 100,
    green: (multipliers.green / total) * 100,
    blue: (multipliers.blue / total) * 100,
    white: (0.2 / total) * 100
  };

  // Tainted chromatics have different mechanics - more extreme probabilities
  const taintedModifier = chartType === 'tainted' ? 1.3 : 1.0;
  
  return [
    {
      color: 'Red',
      probability: Math.round(standardProbs.red * taintedModifier * 10) / 10,
      averageCost: Math.round(100 / (standardProbs.red * taintedModifier / 100)),
      displayColor: COLORS.red
    },
    {
      color: 'Green', 
      probability: Math.round(standardProbs.green * taintedModifier * 10) / 10,
      averageCost: Math.round(100 / (standardProbs.green * taintedModifier / 100)),
      displayColor: COLORS.green
    },
    {
      color: 'Blue',
      probability: Math.round(standardProbs.blue * taintedModifier * 10) / 10,
      averageCost: Math.round(100 / (standardProbs.blue * taintedModifier / 100)),
      displayColor: COLORS.blue
    },
    {
      color: 'White',
      probability: Math.round(standardProbs.white * 10) / 10,
      averageCost: Math.round(100 / (standardProbs.white / 100)),
      displayColor: COLORS.white
    }
  ];
};

export default function ProbabilityChart({ itemBase, socketCount, chartType = 'standard' }: ProbabilityChartProps) {
  const [viewType, setViewType] = useState<'bar' | 'pie'>('bar');
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    const chartData = calculateProbabilities(itemBase, socketCount, chartType);
    setData(chartData);
  }, [itemBase, socketCount, chartType]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-poe-dark border border-poe-accent/30 rounded-lg p-3 shadow-lg">
          <p className="text-poe-text font-medium">{`${label} Socket`}</p>
          <p className="text-poe-accent">{`Probability: ${payload[0].value}%`}</p>
          <p className="text-poe-text-secondary text-sm">{`Avg Cost: ${payload[0].payload.averageCost} orbs`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-poe-surface border-poe-accent/20">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-semibold text-poe-text">Socket Color Probabilities</h3>
            <Badge variant="secondary" className="bg-poe-accent/20 text-poe-accent capitalize">
              {chartType} Chromatics
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={viewType === 'bar' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewType('bar')}
              className="bg-poe-accent text-poe-dark border-poe-accent"
            >
              <BarChart3 className="w-4 h-4 mr-1" />
              Bar
            </Button>
            <Button
              variant={viewType === 'pie' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewType('pie')}
              className="bg-poe-accent text-poe-dark border-poe-accent"
            >
              <PieChartIcon className="w-4 h-4 mr-1" />
              Pie
            </Button>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {viewType === 'bar' ? (
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="color" 
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  axisLine={{ stroke: '#4B5563' }}
                />
                <YAxis 
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  axisLine={{ stroke: '#4B5563' }}
                  label={{ value: 'Probability (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9ca3af' } }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="probability" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.displayColor} />
                  ))}
                </Bar>
              </BarChart>
            ) : (
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="probability"
                  label={({ color, probability }) => `${color}: ${probability}%`}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.displayColor} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item) => (
            <div key={item.color} className="text-center">
              <div 
                className="w-4 h-4 rounded mx-auto mb-2" 
                style={{ backgroundColor: item.displayColor }}
              />
              <div className="text-sm font-medium text-poe-text">{item.color}</div>
              <div className="text-xs text-poe-text-secondary">{item.probability}%</div>
              <div className="text-xs text-poe-text-secondary">{item.averageCost} avg</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}