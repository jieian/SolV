
import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, unit, icon }) => {
  return (
    <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-400">{title}</p>
          <p className="text-4xl font-bold text-white mt-2">
            {value} <span className="text-2xl text-gray-500">{unit}</span>
          </p>
        </div>
        <div className="p-3 bg-slate-700/50 rounded-lg">
            {icon}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
