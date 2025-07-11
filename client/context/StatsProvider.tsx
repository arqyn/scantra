import React, { createContext, useState, ReactNode } from "react";
import { StatsContextType } from "@/types/stats-context";

export const StatsContext = createContext<StatsContextType | undefined>(
  undefined
);

export const StatsProvider = ({ children }: { children: ReactNode }) => {
  const [receiptsScanned, setReceiptsScanned] = useState(0);
  const [alertsFound, setAlertsFound] = useState(0);

  const incrementReceiptsScanned = (count: number) => setReceiptsScanned(prev => prev + count);
  const incrementAlertsFound = (count: number) =>
    setAlertsFound(prev => prev + count);

  return (
    <StatsContext.Provider
      value={{
        receiptsScanned,
        alertsFound,
        incrementReceiptsScanned,
        incrementAlertsFound,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};
