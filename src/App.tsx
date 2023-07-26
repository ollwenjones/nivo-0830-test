import { data } from "./data";
import "./App.css";
import MyBar from "./MyBar";
import { ChartContext, IChartContext } from "./ChartContext";

function App() {
  const context: IChartContext = {
    noDataMessage: 'No Data to show...'
  };
  return (
    <div className="App">
      <h1>Can haz chart? :cat:</h1>
      <ChartContext.Provider value={context}>
        <div style={{ width: "100%", height: 500 }}>
          <MyBar data={data} />
        </div>
      </ChartContext.Provider>
    </div>
  );
}

export default App;
