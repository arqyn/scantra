export type StatsContextType = {
  receiptsScanned: number;
  alertsFound: number;
  incrementReceiptsScanned: (count: number) => void;
  incrementAlertsFound: (count: number) => void;
};
