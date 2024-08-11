import React, { useState, useEffect } from 'react';
import BoHButtons from "../Components/FohButton";

const BoH = ({ width, height }) => {
    const [latestImages, setLatestImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchLatestImages();
        const intervalId = setInterval(fetchLatestImages, 5000); // Poll every 5 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    function fetchLatestImages() {
        setLoading(true);
        fetch('http://localhost:5150/api/getLatestImages')
            .then(response => response.json())
            .then(data => {
                if (data.success && data.images) {
                    setLatestImages(data.images.map(image => ({
                        ...image,
                        id: image.id.toString() // Ensure id is a string
                    })));
                } else {
                    console.log('No images found');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function updateImageState(id, newState) {
        fetch('http://localhost:5150/api/updateImageState', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, state: newState }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Update the local state
                setLatestImages(prevImages =>
                    prevImages.map(image =>
                        image.id === id ? { ...image, state: newState } : image
                    )
                );
                console.log(`Image ${id} state updated to ${newState}`);
            } else {
                console.error('Failed to update image state');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return(
        <div>
            <BoHButtons width={200} height={200}/>
            {loading ? (
                <p>Loading latest images...</p>
            ) : latestImages.length > 0 ? (
                <div>
                    {latestImages.map((image, index) => (
                        <div key={index} style={{margin: '20px 0', border: '1px solid #ccc', padding: '10px'}}>
                            <img
                                src={image.imageData}
                                alt={`Kitchen layout ${index + 1}`}
                                width={width}
                                height={height}
                                style={{margin: '10px'}}
                            />
                            <p>Sent at: {new Date(image.timestamp).toLocaleString()}</p>
                            <p>Current State: {image.state}</p>
                            <select 
                                value={image.state} 
                                onChange={(e) => updateImageState(image.id.toString(), e.target.value)}
                            >
                                <option value="Sent To Kitchen">Sent To Kitchen</option>
                                <option value="Ready for Pickup">Ready for Pickup</option>
                                <option value="Order at table">Order at table</option>
                            </select>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No images available</p>
            )}
            <button onClick={fetchLatestImages} disabled={loading}>
                {loading ? 'Refreshing...' : 'Refresh Images'}
            </button>
        </div>
    )
}

export default BoH;