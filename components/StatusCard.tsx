import React from 'react';
import { SystemState } from '../types';

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm-.707 8.122a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
    </svg>
);

const GridIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 4.06a1 1 0 00-1.8-.6L12 7.34 9.8 3.46a1 1 0 00-1.8.6L10.32 8H4v2h5.5l-2.1 9H9.5l2.5-7 2.5 7h2.1l-2.1-9H20V8h-6.32l2.32-3.94z" />
    </svg>
);

const IdleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

interface StatusCardProps {
  state: SystemState;
}

const statusConfig = {
  [SystemState.IDLE]: {
    label: "Idle",
    description: "Charger is on standby.",
    icon: IdleIcon,
    color: "bg-green-500/10 border-green-500/50",
    iconColor: "text-green-400",
  },
  [SystemState.SOLAR_CHARGING]: {
    label: "Solar Charging",
    description: "Charging from the sun.",
    icon: SunIcon,
    color: "bg-yellow-500/10 border-yellow-500/50",
    iconColor: "text-yellow-400",
  },
  [SystemState.GRID_CHARGING]: {
    label: "Grid Charging",
    description: "Charging from the grid.",
    icon: GridIcon,
    color: "bg-red-500/10 border-red-500/50",
    iconColor: "text-red-400",
  },
};

const StatusCard: React.FC<StatusCardProps> = ({ state }) => {
  const config = statusConfig[state];
  const Icon = config.icon;

  return (
    <div className={`p-6 rounded-2xl border bg-slate-800/50 backdrop-blur-sm h-full flex flex-col justify-center transition-all duration-500 ${config.color}`}>
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-full ${config.color.split(' ')[0]}`}>
          <Icon className={`w-8 h-8 ${config.iconColor}`} />
        </div>
        <div>
          <p className="text-gray-400 text-sm">System Status</p>
          <p className="text-2xl font-bold text-white">{config.label}</p>
          <p className="text-gray-300 text-sm">{config.description}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;