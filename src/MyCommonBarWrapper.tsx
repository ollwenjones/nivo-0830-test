import { useContext } from "react";
import { ChartContext } from "./ChartContext";

interface MyCommonBarWrapperProps {
  children: React.ReactNode;
  noData?: boolean;
}

/**
 * we have a common bar wrapper
 * @param props
 * @returns JSX
 */
export function MyCommonBarWrapper({
  children,
  noData: hasData,
}: MyCommonBarWrapperProps) {
  const context = useContext(ChartContext);
  return <>{hasData ? context.noDataMessage: children} </>;
}
