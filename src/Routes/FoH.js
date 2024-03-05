import Canvas from '../Components/Canvas.js';
import FohButton from '../Components/FohButton';

export default function FoH() {


  return (
    <>
            <FohButton
      width={200}
      height={200}/>

      <Canvas
        width={700}
        height={500}
      />
    </>
  );
}