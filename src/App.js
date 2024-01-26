import './App.css';
import Canvas from './Components/Canvas';
// import ClearButton from './Components/ClearButton';
import SaveButton from './Components/SaveButton';




function App() {
  return (
    <div className="App">
            <SaveButton
      width={200}
      height={200}/>

      <Canvas
        width={700}
        height={500}
      />
    </div>
  );
}

export default App;
