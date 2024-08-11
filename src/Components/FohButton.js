import React from "react";


// const express =require('express')
// const app = express()


const FohButton = ({
    height,
    width,
    onSendToKitchen
}) => {

    const [loading, setLoading] = React.useState(false);

    function sendToKitchen() {
        setLoading(true);
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
            alert('Order sent to kitchen successfully!');
            clearCanvas();
            onSendToKitchen(); // Hide the order form
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to send order to kitchen');
        })
        .finally(() => {
            setLoading(false);
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
        id={'sendToKitchenButton'}
                onMouseDown={sendToKitchen}
                disabled={loading}
        >
            {loading ? 'Sending...' : 'Send to Kitchen'}
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