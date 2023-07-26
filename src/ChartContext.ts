import React from 'react';

export interface IChartContext {
 noDataMessage: string;
}

export const ChartContext = React.createContext<IChartContext>({
  noDataMessage: 'hey! You for got something.',
});