import "./App.css";
import Link from "./components/Link/Link";
import Navbar from "./components/Navbar/Navbar";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import ReaChartLineChat from "./components/RecChartLineChart/RecChartLineChart";
import CustomShapeBarChart from "./components/CustomShapeBarChart/CustomShapeBarChart";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className="text-7xl">Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <ReaChartLineChat></ReaChartLineChat>
      <CustomShapeBarChart></CustomShapeBarChart>
    </>
  );
}

export default App;
