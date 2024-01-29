import './App.css';
import Canvas from './Components/Canvas';
import FohButton from './Components/FohButton';
import Kitchen from './Components/Kitchen';
// import ClearButton from './Components/ClearButton';




function App() {
  return (
    <div className="App">
            <FohButton
      width={200}
      height={200}/>

      <Canvas
        width={700}
        height={500}
      />
      <Kitchen
      width={350}
      height={500}
      />
    </div>
  );
}

export default App;
