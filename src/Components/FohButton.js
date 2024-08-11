import React from "react";


// const express =require('express')
// const app = express()


const FohButton = ({
    height,
    width
}) => {

    const [loading, setLoading] = React.useState(false);

    function saveCanvas() {
        const canvas = document.getElementById("canvas");
        const imageData = canvas.toDataURL('image/png');
        fetch('http://localhost:5150/api/saveImage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageData }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Image saved successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to save image');
        });
    }

    function loadCanvas() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        setLoading(true);
        fetch('http://localhost:5150/api/getLatestImage')
        .then(response => response.json())
        .then(data => {
            if (data.success && data.imageData) {
                const img = new Image();
                img.onload = function() {
                    ctx.drawImage(img, 0, 0);
                    setLoading(false);
                };
                img.src = data.imageData;
            } else {
                setLoading(false);
                alert('No saved image found!');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setLoading(false);
            alert('Failed to load image');
        });
    }

    function clearCanvas() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return(
        <div>
        <button
        height={height}
        width={width}
        id={'saveButton'}
                onMouseDown={saveCanvas}
                disabled={loading}
        >
            {loading ? 'Saving...' : 'Save'}
        </button>
                <button
        height={height}
        width={width}
        id={'loadButton'}
                onMouseDown={loadCanvas}
                disabled={loading}
        >
            {loading ? 'Loading...' : 'Load'}
        </button>
                <button
        height={height}
        width={width}
        onMouseDown={clearCanvas}
        id={'clearButton'}
        disabled={loading}
        >
            Clear
        </button>
        
        </div>
        
    )
}

export default FohButton