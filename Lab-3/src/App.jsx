import './App.css'
import data from "./data/data";
import ColorBox from "./Components/ColorBox";

function App() {
  return (
    <>
    <div className="ColorBoxContainer">
      {data.map((index) =>
      <ColorBox colors={data} index={index}/>)}
      </div>
    </>
  );
}

export default App
