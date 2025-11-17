import React from 'react';
import { SolVData, SystemState } from '../types';
import StatusCard from './StatusCard';
import MetricCard from './MetricCard';
import BatteryGauge from './BatteryGauge';
import PowerFlowAnimation from './PowerFlowAnimation';

interface DashboardProps {
  data: SolVData;
}

const BoltIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
    </svg>
);

const SolarPanelIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21a2 2 0 01-2-2v-2H8v2a4 4 0 004 4 4 4 0 004-4v-2h-2v2a2 2 0 01-2 2zM19.7 7.6L13.4 3.1a2 2 0 00-2.8 0L4.3 7.6a2 2 0 00-1 1.73V14a1 1 0 001 1h15a1 1 0 001-1V9.33a2 2 0 00-1-1.73zM12 5.2l4.5 3.1H7.5L12 5.2z"/>
    </svg>
);


const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      
      <div className="lg:col-span-2 xl:col-span-1">
        <StatusCard state={data.systemState} />
      </div>

      <div className="lg:col-span-2 xl:col-span-2 order-first lg:order-none">
        <PowerFlowAnimation state={data.systemState} />
      </div>
      
      <div className="row-span-2 flex flex-col justify-center">
        <BatteryGauge percentage={data.batteryPercentage} />
      </div>
      
      <MetricCard
        title="Solar Panel Voltage"
        value={data.solarVoltage.toFixed(2)}
        unit="V"
        icon={<SolarPanelIcon className="w-8 h-8 text-yellow-400" />}
      />

      <MetricCard
        title="Charging Current"
        value={data.current.toFixed(3)}
        unit="A"
        icon={<BoltIcon className="w-8 h-8 text-green-400" />}
      />

    </div>
  );
};

export default Dashboard;