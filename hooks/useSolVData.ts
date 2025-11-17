
import { useState, useEffect, useRef } from 'react';
import { SystemState, SolVData } from '../types';

export const useSolVData = (): SolVData | null => {
  const [data, setData] = useState<SolVData | null>(null);
  const batteryPercentageRef = useRef(50);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate sensor readings
      const solarVoltage = 2.5 + Math.random() * 2.5; // Random voltage between 2.5 and 5.0
      const isCharging = Math.random() > 0.3; // 70% chance of being "plugged in"
      const current = isCharging ? 0.1 + Math.random() * 2.0 : Math.random() * 0.05;

      // Determine system state based on ESP32 logic
      let systemState: SystemState;
      const CURRENT_START_THRESHOLD = 0.08;
      const SOLAR_THRESHOLD_VOLTAGE = 3.1;

      if (current < CURRENT_START_THRESHOLD) {
        systemState = SystemState.IDLE;
      } else if (solarVoltage >= SOLAR_THRESHOLD_VOLTAGE) {
        systemState = SystemState.SOLAR_CHARGING;
      } else {
        systemState = SystemState.GRID_CHARGING;
      }

      // Simulate battery percentage change
      if (systemState !== SystemState.IDLE) {
        batteryPercentageRef.current = Math.min(100, batteryPercentageRef.current + 0.5);
      } else {
         batteryPercentageRef.current = Math.max(0, batteryPercentageRef.current - 0.05);
      }

      setData({
        solarVoltage,
        batteryPercentage: batteryPercentageRef.current,
        current,
        systemState,
      });

    }, 2000); // Update every 2 seconds, as per ESP32 code

    return () => clearInterval(interval);
  }, []);

  return data;
};
