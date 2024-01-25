import './App.css';
import Canvas from './Components/Canvas';
import ClearButton from './Components/ClearButton';




function App() {
  return (
    <div className="App">
      <ClearButton
      width={200}
      height={200}>
        Clear
        </ClearButton>
      <Canvas
        width={700}
        height={500}
      />
    </div>
  );
}

export default App;
