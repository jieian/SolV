import React from 'react';
import { SystemState } from '../types';

// Icon components defined locally to reduce file count
const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2m0 18v2m-8-9H2m20 0h-2M5.6 5.6l-1.4-1.4M19.8 19.8l-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4"/>
    </svg>
);

const GridIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
       <path d="M12 2L1 21h22L12 2zm-1 5h2v6h-2V7zm0 8h2v2h-2v-2z"/>
    </svg>
);

const EVIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
    </svg>
);


interface PowerFlowAnimationProps {
  state: SystemState;
}

const PowerFlowAnimation: React.FC<PowerFlowAnimationProps> = ({ state }) => {
  const isSolar = state === SystemState.SOLAR_CHARGING;
  const isGrid = state === SystemState.GRID_CHARGING;
  const isCharging = isSolar || isGrid;

  return (
    <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm h-full flex flex-col justify-center">
        <div className="flex justify-between items-center w-full">
            {/* Source Icon */}
            <div className="flex flex-col items-center w-20 text-center">
                <div className="relative">
                    <SunIcon className={`w-12 h-12 transition-all duration-500 ${isSolar ? 'text-yellow-400 scale-110' : 'text-slate-600 scale-90'}`} />
                    <GridIcon className={`w-12 h-12 absolute top-0 left-0 transition-all duration-500 ${isGrid ? 'text-red-500 scale-110' : 'text-slate-600 scale-90 opacity-0'}`} />
                </div>
                <span className={`mt-2 text-sm font-medium transition-colors duration-500 ${isSolar ? 'text-yellow-400' : isGrid ? 'text-red-500' : 'text-slate-500'}`}>
                    {isSolar ? 'Solar' : isGrid ? 'Grid' : 'Source'}
                </span>
            </div>
            
            {/* Combined Flow */}
            <div className="flex-1 h-1 bg-slate-700/50 rounded-full relative overflow-hidden mx-4">
                {isCharging && (
                    <div className={`absolute top-0 left-0 h-full w-full bg-gradient-to-r ${isSolar ? 'from-yellow-500/0 via-yellow-500/50 to-yellow-500/0' : 'from-red-500/0 via-red-500/50 to-red-500/0'}`} style={{ animation: `flow-right 2s linear infinite` }}></div>
                )}
            </div>
            <style>{`
                @keyframes flow-right {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>

            {/* EV Icon */}
            <div className="flex flex-col items-center w-20 text-center">
                <EVIcon className={`w-12 h-12 transition-colors duration-500 ${isCharging ? 'text-green-400' : 'text-slate-600'}`} />
                <span className={`mt-2 text-sm font-medium transition-colors duration-500 ${isCharging ? 'text-green-400' : 'text-slate-500'}`}>EV</span>
            </div>
        </div>
    </div>
  );
};

export default PowerFlowAnimation;