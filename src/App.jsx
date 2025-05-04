import "./App.css";
import Link from "./components/Link/Link";
import Navbar from "./components/Navbar/Navbar";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import ReaChartLineChat from "./components/RecChartLineChart/RecChartLineChart";
import CustomShapeBarChart from "./components/CustomShapeBarChart/CustomShapeBarChart";
import Phones from "./components/Phones/Phones";

function App() {
  return (
    <section>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className="text-7xl">Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <ReaChartLineChat></ReaChartLineChat>
      <CustomShapeBarChart></CustomShapeBarChart>
      <Phones></Phones>
    </section>
  );
}

export default App;
