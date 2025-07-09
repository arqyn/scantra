export type StatsContextType = {
  receiptsScanned: number;
  alertsFound: number;
  incrementReceiptsScanned: () => void;
  incrementAlertsFound: (count: number) => void;
};
