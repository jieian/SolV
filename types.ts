
export enum SystemState {
  IDLE = "IDLE",
  SOLAR_CHARGING = "SOLAR_CHARGING",
  GRID_CHARGING = "GRID_CHARGING",
}

export interface SolVData {
  solarVoltage: number;
  batteryPercentage: number;
  current: number;
  systemState: SystemState;
}
