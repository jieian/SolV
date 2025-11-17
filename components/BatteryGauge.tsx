import React from 'react';

interface BatteryGaugeProps {
  percentage: number;
}

const BatteryGauge: React.FC<BatteryGaugeProps> = ({ percentage }) => {
  const cleanPercentage = Math.round(Math.max(0, Math.min(100, percentage)));
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (cleanPercentage / 100) * circumference;

  return (
    <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm h-full flex flex-col items-center justify-center">
        <h3 className="text-lg font-medium text-gray-400 mb-4">Solar Battery</h3>
        <div className="relative w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle
                className="stroke-slate-700"
                strokeWidth="15"
                fill="transparent"
                r={radius}
                cx="100"
                cy="100"
                />
                <circle
                className={`transition-all duration-1000 ease-out stroke-yellow-400`}
                strokeWidth="15"
                strokeLinecap="round"
                fill="transparent"
                r={radius}
                cx="100"
                cy="100"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                transform="rotate(-90 100 100)"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-white">
                    {cleanPercentage}
                </span>
                <span className="text-lg text-gray-400">%</span>
            </div>
        </div>
    </div>
  );
};

export default BatteryGauge;