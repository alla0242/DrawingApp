import React from "react";
const SaveButton = ({
    height,
    width
}) => {

let imageData

    function saveCanvas(){
        // console.log('button is listeneing')
        const canvas = document.getElementById("canvas");
        // const ctx = canvas.getContext('2d')
        imageData = canvas.toDataURL('image/png', 1)
        console.log(imageData)
    }

        function loadCanvas(){
        // console.log('load is listeneing')
        // const canvas = document.getElementById("canvas");
        // const ctx = canvas.getContext('2d')
    const link = document.createElement('a');
    link.href = imageData;
    link.download = 'canvas.png';
    link.click();
        // console.log(imageData)

    }

        function clearCanvas(){
        // console.log('button is listeneing')
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d')
        ctx.reset()
    }

    return(
        <div>
        <button
        height={height}
        width={width}
        id={'saveButton'}
                onMouseDown={saveCanvas}>
            Save
        </button>
                <button
        height={height}
        width={width}
        id={'loadButton'}
                onMouseDown={loadCanvas}>
            Load
        </button>
                <button
        height={height}
        width={width}
        onMouseDown={clearCanvas}
        id={'clearButton'}>
            Clear
        </button>
        
        </div>
        
    )
}

export default SaveButton